import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const alt = site.meta.ogTitle;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#F7F5F2",
          color: "#2C2A26",
          padding: "72px 80px",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 1, color: "#2F5D56" }}>{site.name}</div>
        <div
          style={{
            fontSize: 84,
            lineHeight: 1.05,
            letterSpacing: -2,
            maxWidth: 980,
          }}
        >
          {site.h1}
        </div>
        <div style={{ fontSize: 28, color: "#6B6560", maxWidth: 820 }}>{site.meta.ogDescription}</div>
      </div>
    ),
    { ...size },
  );
}
