import { NextResponse } from "next/server";
import { getAssetsCollection } from "@/lib/mongodb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request) {
  try {
    const assets = await getAssetsCollection();
    const doc = await assets.findOne({ _id: "profile-picture" });

    if (doc?.data?.buffer) {
      return new NextResponse(doc.data.buffer, {
        status: 200,
        headers: {
          "Content-Type": doc.contentType || "image/png",
          "Cache-Control": "no-store",
        },
      });
    }
  } catch (error) {
    // MONGODB_URI missing/unreachable, or DB empty — fall through to default.
  }

  return NextResponse.redirect(new URL("/default-avatar.svg", request.url));
}
