export interface ProductType {
  id: string;
  item: string;
  qty: number;
  reviews: number;
  rating: number;
  price: number;
  format: string;
  image?: string;
  stock?: number;
}
export type Action = {
  type: 'increment' | 'decrement' | 'add item' | 'remove item' | 'delete cart';
  product?: ProductType;
};
