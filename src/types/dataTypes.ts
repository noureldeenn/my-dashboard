export type Order = "asc" | "desc";

export interface OrdersData {
  id: number;
  product: string;
  date: string;
  total: number;
  status: string;
  payment: string;
  action: string;
}

export interface ProductData {
  id: number;
  name: string;
  imageUrl: string;
  color: string;
  price: number;
  stock: number;
  category: string;
  rating: number;
  reviews: number;
  action: string;
}

export interface InvoiceData {
  id: number;
  customer: string;
  email:string;
  status: string;
  date: string;
  amount: number;
  action: string;
}
