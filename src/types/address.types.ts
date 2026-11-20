export interface UserAddress {
  id: string;
  user_id: string;
  recipient_name: string;
  phone_number: string;
  full_address: string;
  city: string;
  postal_code: string;
  is_default: boolean;
}

export interface UserAddressRequest {
  recipient_name: string;
  phone_number: string;
  full_address: string;
  city: string;
  postal_code: string;
  is_default: boolean;
}
