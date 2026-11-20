export interface UserProfile {
  id: string;
  user_id: string;
  username: string;
  full_name: string;
  phone_number: string;
  avatar_url: string;
  created_at?: string;
  updated_at?: string;
}

export interface UpdateProfileRequest {
  username: string;
  full_name: string;
  phone_number: string;
  avatar_url?: string;
}
