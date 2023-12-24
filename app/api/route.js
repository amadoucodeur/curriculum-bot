import { openai } from "@/src/lib/openai";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const prompt = await req.json();

  const reponse = openai.chat.completions.create({
    model: "gpt-3.5-turbo-instruct",
    message: [
      {
        role: "assistant",
        content: "que des poemes en fr",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });
  console.log(reponse.choices[0].message.content);
  console.log("_____________________________________________________________")
  return NextResponse.json({
    code: reponse.choices[0].message.content,
  });
};
