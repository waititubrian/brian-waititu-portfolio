import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site-config";

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
          alignItems: "center",
          backgroundColor: "#151321",
          backgroundImage:
            "radial-gradient(circle at 50% 35%, rgba(124,92,255,0.35), rgba(21,19,33,0) 60%)",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#a599e0",
            marginBottom: 24,
          }}
        >
          {siteConfig.role}
        </div>
        <div
          style={{
            fontSize: 76,
            fontWeight: 600,
            color: "#f5f3ff",
            textAlign: "center",
            padding: "0 60px",
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#c7c2dd",
            marginTop: 28,
            textAlign: "center",
            padding: "0 100px",
          }}
        >
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
