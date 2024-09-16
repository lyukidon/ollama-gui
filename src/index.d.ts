// api request

// api response
export interface GenerateChatCompletionResponseType {
  model: string;
  created_at: string;
  message: {
    role: string;
    content: string;
    images: null;
  };
  done: boolean;
}
