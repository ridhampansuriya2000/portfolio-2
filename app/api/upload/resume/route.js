import { NextResponse } from "next/server";
import { getAssetsCollection } from "@/lib/mongodb";

export const runtime = "nodejs";

const MAX_SIZE = 10 * 1024 * 1024; // 10MB

export async function POST(request) {
  const secret = request.headers.get("x-upload-secret");
  if (!process.env.UPLOAD_SECRET || secret !== process.env.UPLOAD_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let formData;
  try {
    formData = await request.formData();
  } catch (error) {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  const file = formData.get("file");
  if (!file || typeof file === "string") {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  if (file.type !== "application/pdf") {
    return NextResponse.json({ error: "Resume must be a PDF file." }, { status: 400 });
  }

  if (file.size > MAX_SIZE) {
    return NextResponse.json({ error: "Resume must be 10MB or smaller." }, { status: 400 });
  }

  try {
    const buffer = Buffer.from(await file.arrayBuffer());
    const assets = await getAssetsCollection();
    // Upsert: a new upload always overwrites whatever resume was stored before.
    await assets.updateOne(
      { _id: "resume" },
      {
        $set: {
          data: buffer,
          contentType: file.type,
          filename: file.name,
          updatedAt: new Date(),
        },
      },
      { upsert: true }
    );
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Could not save the resume. Check MONGODB_URI." },
      { status: 500 }
    );
  }
}
