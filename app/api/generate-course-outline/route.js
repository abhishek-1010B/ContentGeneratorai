import { courseOutlineAIModel } from "@/configs/AiModel";
import { db } from "@/configs/db";
import { STUDY_MATERIAL_TABLE } from "@/configs/schema";
import { NextResponse } from "next/server";
export async function POST(req) {
  try {
    const { courseId, topic, courseType, difficultyLevel, createdBy } =
      await req.json();
    const PROMPT = `
        generate a study material for '${topic}' for '${courseType}' 
        and level of Difficulty will be '${difficultyLevel}' 
        with summary of course, List of chapters along with the summary for each chapter, 
        Topic list in each chapter in JSON format
      `;
    // Generate course layout using AI
    const aiResp = await courseOutlineAIModel.sendMessage(PROMPT);
    const aiResult = JSON.parse(aiResp.response.text());
    // Save result along with user input
    const dbResult = await db
      .insert(STUDY_MATERIAL_TABLE)
      .values({
        courseId: courseId,
        courseType: courseType,
        difficultyLevel: difficultyLevel,
        topic: topic,
        createdBy: createdBy,
        courseLayout: aiResult,
      })
      .returning({ STUDY_MATERIAL_TABLE });
    console.log(dbResult);
    return NextResponse.json({ result: dbResult[0] });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
