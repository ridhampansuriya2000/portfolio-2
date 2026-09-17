import { NextResponse } from "next/server";
import { getAssetsCollection } from "@/lib/mongodb";

export const runtime = "nodejs";

const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/webp"];
const MAX_SIZE = 5 * 1024 * 1024; // 5MB

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

  if (!ALLOWED_TYPES.includes(file.type)) {
    return NextResponse.json(
      { error: "Unsupported image type. Use PNG, JPEG, or WEBP." },
      { status: 400 }
    );
  }

  if (file.size > MAX_SIZE) {
    return NextResponse.json({ error: "Image must be 5MB or smaller." }, { status: 400 });
  }

  try {
    const buffer = Buffer.from(await file.arrayBuffer());
    const assets = await getAssetsCollection();
    await assets.updateOne(
      { _id: "profile-picture" },
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
      { error: "Could not save the image. Check MONGODB_URI." },
      { status: 500 }
    );
  }
}
