import { NextRequest, NextResponse } from "next/server";
import { ImageResponse } from "@vercel/og";
import Image from "next/image";

export async function GET(request: NextRequest) {
  return new ImageResponse(
    (
      <div style={{ background: "#282C33", width: "100vw", height: "100vh" }}>
        red
      </div>
    ),
    {
      width: 1200,
      height: 628,
    }
  );
}
