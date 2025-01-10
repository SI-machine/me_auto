import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
import { HuggingFaceInference } from "@langchain/community/llms/hf";
import { createClient } from "@supabase/supabase-js";
import { Document } from "@langchain/core/documents";

const embeddings = new HuggingFaceInference({
  model: "sentence-transformers/all-MiniLM-L6-v2",
  apiKey: import.meta.env.VITE_HUGGINGFACEHUB_API_TOKEN,
});

const client = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

//Initialize the vector store
export async function initVectorStore() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return new SupabaseVectorStore(embeddings as any, {
    client,
    tableName: "documents",
    queryName: "match_documents",
  });
}
// Add documents to the vector store
export async function addDocuments(documents: Document[]) {
  const vectorStore = await initVectorStore();
  return await vectorStore.addDocuments(documents);
}

// Search the vector store for similar documents
export async function searchDocuments(query: string) {
  const vectorStore = await initVectorStore();
  return await vectorStore.similaritySearch(query, 1);
}
