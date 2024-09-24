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

// redux

export interface ChatRequestType {
  role: string;
  content: string;
}

export interface ChatResponseType {
  // model: string;
  // created_at: string;
  // message: {
    role: string;
    content: string;
  // };
  // done: boolean;
  // total_duration: number;
  // load_duration: number;
  // prompt_eval_count: number;
  // prompt_eval_duration: number;
  // eval_count: number;
  // eval_duration: number;
}

export type ChatType = ChatRequestType | ChatResponseType

export type ChatSliceType = ChatType[];

export interface SearchInputType {
  search: string;
}
