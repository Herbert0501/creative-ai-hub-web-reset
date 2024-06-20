export interface Chat {
  id: string;
  title: string;
  updatedAt: number;
}

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  updatedAt: number;
}
