export interface Product {
  id: string;
  product_code: string;
  product_name: string;
  category_id: string;
  price: number;
  stock: number;
  description: string;
  image_urls: string[];
}

export interface CreateProductPayload {
  product_code: string;
  product_name: string;
  category_id: string;
  price: number;
  stock: number;
  description?: string;
}

export interface FlashSaleRequest {
  product_id: string;
  flash_sale_price: number;
  flash_sale_stock: number;
  max_purchase_per_user: number;
  start_time: number;
  end_time: number;
  version?: number;
}
