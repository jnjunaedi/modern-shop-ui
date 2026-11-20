export interface ApiResponse<T = undefined> {
  message?: string;
  data?: T;
}

export interface ApiErrorResponse {
  message?: string;
  error?: string | Record<string, string>;
}
