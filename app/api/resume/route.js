import { NextResponse } from "next/server";
import { getAssetsCollection } from "@/lib/mongodb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request) {
  try {
    const assets = await getAssetsCollection();
    const doc = await assets.findOne({ _id: "resume" });

    if (doc?.data?.buffer) {
      return new NextResponse(doc.data.buffer, {
        status: 200,
        headers: {
          "Content-Type": doc.contentType || "application/pdf",
          "Content-Disposition": `attachment; filename="${doc.filename || "Ridham-Pansuriya-Resume.pdf"}"`,
          "Cache-Control": "no-store",
        },
      });
    }
  } catch (error) {
    // MONGODB_URI missing/unreachable, or DB empty — fall through to default.
  }

  return NextResponse.redirect(new URL("/default-resume.pdf", request.url));
}
