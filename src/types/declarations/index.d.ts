declare interface CustomerType {
  fullName: string;
  id: string;
}

declare interface ProductType {
  image?: string;
  name: string;
  id: string;
}

declare type OrderStatusType = "Delivered" | "Draft" | "Canceled" | "Await";

declare interface OrderType {
  id: string;
  createdAt: string;
  customer: CustomerType;
  products: ProductType[];
  status: OrderStatusType;
  totalPrice: number;
  deliveryDate: string;
}
