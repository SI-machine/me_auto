import { HuggingFaceInference } from "@langchain/community/llms/hf";
import { PromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
//import { ChatOpenAI } from "@langchain/openai";

import { retriever } from "./utils/retriever";
import { combineDocuments } from "./utils/combineDocuments";
//import { formatConvHistory } from "./utils/formatConvHistory";

import {
  RunnableSequence,
  RunnablePassthrough,
} from "@langchain/core/runnables";

const hfApiKey = import.meta.env.VITE_HUGGINGFACEHUB_API_TOKEN;

const model = new HuggingFaceInference({
  model: "google/flan-t5-base",
  apiKey: hfApiKey,
  maxTokens: 1500,
  temperature: 0.7,
});

// const openAIApiKey = import.meta.env.VITE_OPENAI_API_KEY;
// const model = new ChatOpenAI({ openAIApiKey });

export async function getAnswer() {
  try {
    const standAloneQuestionTemplate =
      "Convert this question into a clear, single standalone question: {question} \n\nStandalone question:";

    const standaloneQuestionPrompt = PromptTemplate.fromTemplate(
      standAloneQuestionTemplate
    );

    const answerTemplate = `Answer the question based on the given context. Keep the answer concise and relevant.
Context: {context}
Question: {question}
Answer:`;

    const answerPrompt = PromptTemplate.fromTemplate(answerTemplate);

    const standaloneQuestionChain = standaloneQuestionPrompt
      .pipe(model)
      .pipe(new StringOutputParser());

    const retrieverChain = RunnableSequence.from([
      (prevResult) => prevResult.standalone_question,
      retriever,
      combineDocuments,
    ]);

    const answerChain = answerPrompt.pipe(model).pipe(new StringOutputParser());

    const chain = RunnableSequence.from([
      {
        standalone_question: standaloneQuestionChain,
        original_input: new RunnablePassthrough(),
      },
      {
        context: retrieverChain,
        question: ({ original_input }) => original_input.question,
      },
      answerChain,
    ]);

    // const chain = RunnableSequence.from([
    //   {
    //     standalone_question: standaloneQuestionChain.pipe(
    //       new RunnablePassthrough({
    //         func: (output: unknown) => {
    //           console.log("Standalone Question:", output);
    //           return output;
    //         },
    //       })
    //     ),
    //     original_input: new RunnablePassthrough(),
    //   },
    //   {
    //     context: retrieverChain.pipe(
    //       new RunnablePassthrough({
    //         func: (output: unknown) => {
    //           console.log("Retrieved Context:", output);
    //           return output;
    //         },
    //       })
    //     ),
    //     question: ({ original_input }) => original_input.question,
    //   },
    //   answerChain,
    // ]);

    const response = await chain.invoke({
      question: "How often should I change oil?",
    });

    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
