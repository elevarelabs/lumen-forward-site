import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

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
          background: "#F5EFE0",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 56,
            background: "#1C2340",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "38%",
            background: "#1C2340",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: 110,
            paddingRight: 80,
            width: "64%",
            height: "100%",
          }}
        >
          <div
            style={{
              color: "#C9A96E",
              fontSize: 18,
              letterSpacing: 6,
              textTransform: "uppercase",
              marginBottom: 28,
            }}
          >
            Lumen Forward
          </div>
          <div
            style={{
              color: "#1C2340",
              fontSize: 58,
              lineHeight: 1.05,
              fontStyle: "italic",
            }}
          >
            Growth exposes structure.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
