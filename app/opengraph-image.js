import { ImageResponse } from "next/og";
import { profile } from "@/data/resume";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#050508",
          backgroundImage:
            "radial-gradient(circle at 12% 20%, rgba(139,92,246,0.35), transparent 45%), radial-gradient(circle at 88% 80%, rgba(45,212,191,0.3), transparent 45%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            borderRadius: 24,
            background: "linear-gradient(135deg, #a78bfa, #f472b6, #2dd4bf)",
            color: "#050508",
            fontSize: 40,
            fontWeight: 700,
            marginBottom: 40,
          }}
        >
          {profile.initials}
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 700, color: "#ffffff" }}>
          {profile.name}
        </div>
        <div style={{ display: "flex", marginTop: 16, fontSize: 34, color: "#a78bfa" }}>
          {profile.title}
        </div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 24, color: "rgba(255,255,255,0.6)" }}>
          {profile.siteUrl.replace("https://", "")}
        </div>
      </div>
    ),
    { ...size }
  );
}
