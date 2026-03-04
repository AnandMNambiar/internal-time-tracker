import { NextResponse } from "next/server";
import { addEntry } from "@/lib/googleSheets";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await addEntry({
      email: "test@company.com",
      project: body.project,
      date: body.date,
      time: body.time,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false });
  }
}