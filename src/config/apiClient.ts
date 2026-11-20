import type { ApiErrorResponse } from '../types/api.types';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8088/api/v1';

export async function apiClient<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const { headers, body, ...restConfig } = options;

  const defaultHeaders: Record<string, string> = {
    ...(headers as Record<string, string>),
  };

  if (!(body instanceof FormData)) {
    defaultHeaders['Content-Type'] = 'application/json';
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...restConfig,
    headers: defaultHeaders,
    body,
    credentials: 'include',
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const errData = data as ApiErrorResponse | null;
    const errorMessage = errData?.message || (typeof errData?.error === 'string' ? errData.error : 'Terjadi kesalahan pada server');

    throw new Error(errorMessage);
  }

  return data as T;
}
