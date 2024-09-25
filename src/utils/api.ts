import axios, { AxiosResponse } from 'axios';
import { GenerateChatCompletionResponseType } from '..';

/**
 * https://github.com/ollama/ollama/blob/main/docs/api.md#list-local-models
 * List models that are available locally.
 * @returns 
 */
export const listLocalModels = async () => {
  const response = await axios({
    baseURL: process.env.VITE_OLLAMA_URL,
    url: "tags",
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
  return response.data.models;
}

/**
 * https://github.com/ollama/ollama/blob/main/docs/api.md#generate-a-completion
 * Generate a response for a given prompt with a provided model. This is a streaming endpoint, so there will be a series of responses. The final response object will include statistics and additional data from the request.
 * @returns 
 */
export const generateCompletion = async (prompt: string) => {
  const response = await axios({
    baseURL: process.env.VITE_OLLAMA_URL,
    url: "generate",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      model: "llama3.1",
      prompt,
      stream: false,
    }
  })
  return response;
}

/**
 * https://github.com/ollama/ollama/blob/main/docs/api.md#generate-a-chat-completion
 * Generate the next message in a chat with a provided model.
 * @returns 
 */
export const generateChatCompletion = async (prompt: string): Promise<GenerateChatCompletionResponseType> => {
  const response = await axios({
    baseURL: process.env.VITE_OLLAMA_URL,
    url: "chat",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      model: "llama3.1",
      messages: [{
        role: "user",
        content: prompt,
      }],
      stream: false,
      keep_alive: "10m",
    }
  })

  return response.data
}

/**
 * https://github.com/ollama/ollama/blob/main/docs/api.md#show-model-information
 * Show information about a model including details, modelfile, template, parameters, license, system prompt.
 */
export const showModelInformation = async () => {
  const response = await axios({
    baseURL: process.env.VITE_OLLAMA_URL,
    url: "show",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      name: "llama3.1"
    }
  })

  return response.data
}

/**
 * https://github.com/ollama/ollama/blob/main/docs/api.md#copy-a-model
 * Copy a model. Creates a model with another name from an existing model.
 */
export const copyModel = async () => {

}

/**
 * https://github.com/ollama/ollama/blob/main/docs/api.md#delete-a-model
 * Delete a model and its data.
 */
export const deleteModel = async () => {

}

/**
 * https://github.com/ollama/ollama/blob/main/docs/api.md#pull-a-model
 * Download a model from the ollama library. Cancelled pulls are resumed from where they left off, and multiple calls will share the same download progress.
 */
export const pullModel = async () => {

}

/**
 * https://github.com/ollama/ollama/blob/main/docs/api.md#push-a-model
 * Upload a model to a model library. Requires registering for ollama.ai and adding a public key first.
 */
export const pushModel = async () => {

}

/**
 * https://github.com/ollama/ollama/blob/main/docs/api.md#generate-embeddings
 * Generate embeddings from a model
 */
export const generateEmbedding = async () => {

}

/**
 * https://github.com/ollama/ollama/blob/main/docs/api.md#list-running-models
 * List models that are currently loaded into memory.
 */
export const listRunningModel = async () => {

}