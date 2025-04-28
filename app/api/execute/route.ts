import { executeCode } from "@/lib/execute";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { source_code, language_id } = body;

  try {
    const result = await executeCode({ source_code, language_id });
    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ output: "Error executing code." }, { status: 500 });
  }
}
