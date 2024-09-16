import { generateChatCompletion, generateCompletion, listLocalModels } from "../src/utils/api";
import { GenerateChatCompletionResponseType } from "../src";

describe("GET - ollama api", () => {
  test("list local models", async () => {
    const response = await listLocalModels();
    expect(response).toHaveLength(1);
    expect(Array.isArray(response)).toBe(true);
  });
});

describe("POST - ollama api", () => {
  test.concurrent(
    "generate completion",
    async () => {
      const response = await generateCompletion("안녕하세요");
      expect(response).toHaveProperty("data");
      expect(response.data).toHaveProperty("response");
      expect(response.data).toHaveProperty("done");
      expect(response.data.done).toBe(true);
    },
    20000
  );

  test.concurrent("generate chat completion", async () => {
    const response = await generateChatCompletion("안녕하세요");
    expect(response).toHaveProperty("model");
    expect(response).toHaveProperty("created_at");
    expect(response).toHaveProperty("message");
    // expect(response.message).toHaveProperty("role");
    // expect(response["message"]).toHaveProperty("content");

    // expect(response).toHaveProperty("done");
    // expect(response["done"]).toBe(true);
  }, 20000);
});
