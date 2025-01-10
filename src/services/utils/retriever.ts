import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
import { HuggingFaceInferenceEmbeddings } from "@langchain/community/embeddings/hf";
import { createClient } from "@supabase/supabase-js";
//import { OpenAIEmbeddings } from "@langchain/openai";

const hfApiKey = import.meta.env.VITE_HUGGINGFACEHUB_API_TOKEN;
//const openaiApiKey = import.meta.env.VITE_OPENAI_API_KEY;

const sbApiKey = import.meta.env.VITE_SUPABASE_API_KEY;
const sbUrl = import.meta.env.VITE_SUPABASE_URL;
const client = createClient(sbUrl, sbApiKey);

const embeddings = new HuggingFaceInferenceEmbeddings({
  apiKey: hfApiKey,
  model: "sentence-transformers/all-MiniLM-L6-v2",
});
// const embeddings = new OpenAIEmbeddings({
//   openAIApiKey: openaiApiKey,
// });

const vectorStore = new SupabaseVectorStore(embeddings, {
  client,
  tableName: "documents",
  queryName: "match_documents",
});

const retriever = vectorStore.asRetriever();

export { retriever };
