export async function executeCode({ source_code, language_id }: { source_code: string; language_id: number }) {
  const res = await fetch("https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-RapidAPI-Key": process.env.RAPIDAPI_KEY as string,
      "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
    },
    body: JSON.stringify({
      source_code,
      language_id,
    }),
  });

  const data = await res.json();
  return {
    output: data.stdout || data.stderr || data.compile_output,
  };
}
