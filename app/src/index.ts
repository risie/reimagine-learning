import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { VertexAI, GenerateContentRequest } from "@google-cloud/vertexai";

dotenv.config();

const app = express();
const port: string | undefined = process.env["PORT"];
const project: string = process.env["GOOGLE_CLOUD_PROJECT"] ?? "";

const vertexAI: VertexAI = new VertexAI({ project });
const textModel: string = "gemini-2.5-flash-lite";
const generativeModel: ReturnType<VertexAI["getGenerativeModel"]> =
  vertexAI.getGenerativeModel({
    model: textModel,
  });

app.get("/", async (_req: Request, res: Response) => {
  try {
    const request: GenerateContentRequest = {
      contents: [
        {
          role: "user",
          parts: [
            {
              text: "Say a short hello world with happy hacking or something.",
            },
          ],
        },
      ],
    };
    const result = await generativeModel.generateContent(request);
    const responseText: string | undefined =
      result?.response?.candidates?.[0]?.content?.parts?.[0]?.text;
    res.send(responseText);
  } catch (error) {
    res.status(500).send("Error communicating with Vertex AI");
  }
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
