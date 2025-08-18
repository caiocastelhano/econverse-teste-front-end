export type Installment = {
  quantity: number; 
  value: number;      
  rate?: number;      
  text?: string;      
};

export type Product = {
  id: string | number;
  title: string;
  imageUrl: string;
  oldPrice?: number;  
  price: number;      
  installment?: Installment;
  shippingBadge?: string; 
  category?: string;      
};
