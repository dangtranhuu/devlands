import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const { source_code, language_id } = await req.json();

  const response = await fetch('https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': process.env.RAPIDAPI_KEY as string,
      'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
    },
    body: JSON.stringify({
      source_code,
      language_id,
    }),
  });

  const data = await response.json();

  return Response.json({
    output: data.stdout || data.stderr || data.compile_output || 'No output',
  });
}
