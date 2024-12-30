import { HuggingFaceInference } from "@langchain/community/llms/hf";

const llm = new HuggingFaceInference({
  model: "gpt2",
  apiKey: import.meta.env.VITE_HUGGINGFACEHUB_API_TOKEN,
});

export async function getAnswer(question: string) {
  let answer = "";

  try {
    answer = await llm.invoke(question);
  } catch (error) {
    console.error(error);
  }

  return answer;
}
