import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "data", "survey.json");

    const file = await fs.readFile(filePath, "utf8");

    return NextResponse.json({
      success: true,
      data: JSON.parse(file),
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: String(error),
      },
      { status: 500 },
    );
  }
}
export async function POST(req: Request) {
  try {
    const { rating } = await req.json();

    const filePath = path.join(process.cwd(), "data", "survey.json");

    const file = await fs.readFile(filePath, "utf8");

    const data = JSON.parse(file);

    data.votes[rating]++;

    await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8");

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: String(error),
      },
      { status: 500 },
    );
  }
}
