import { apiClient } from '../config/apiClient';
import type { AuthMessageResponse, LoginRequest, RegisterRequest } from '../types/auth.types';

export const authService = {
  register: (payload: RegisterRequest) =>
    apiClient<AuthMessageResponse>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),

  login: (payload: LoginRequest) =>
    apiClient<AuthMessageResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),

  logout: () =>
    apiClient<AuthMessageResponse>('/auth/logout', {
      method: 'POST',
    }),
};
