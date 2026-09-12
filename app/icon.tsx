import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#2F5D56",
          color: "#F7F5F2",
          fontSize: 36,
          letterSpacing: -1,
        }}
      >
        L
      </div>
    ),
    { ...size },
  );
}
