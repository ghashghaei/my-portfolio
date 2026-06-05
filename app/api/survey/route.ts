import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const filePath = path.join(process.cwd(), "data", "survey.json");

export async function GET() {
  try {
    const file = await fs.readFile(filePath, "utf8");

    const data = JSON.parse(file);

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("GET ERROR:", error);

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
    const body = await req.json();

    const rating = String(body.rating);

    const file = await fs.readFile(filePath, "utf8");

    const data = JSON.parse(file);

    if (!data.votes) {
      data.votes = {};
    }

    if (!(rating in data.votes)) {
      data.votes[rating] = 0;
    }

    data.votes[rating] += 1;

    await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8");

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("POST ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: String(error),
      },
      { status: 500 },
    );
  }
}
