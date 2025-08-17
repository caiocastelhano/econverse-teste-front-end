export interface Price {
  amount: number;
  currency: 'BRL' | 'USD';
  promoAmount?: number;
  installmentText?: string;
}

export interface Product {
  id: string;
  title: string;
  imageUrl: string;
  alt?: string;
  price: Price;
  badges?: Array<'novo' | 'promo' | 'frete-gratis'>;
  brand?: string;
  category?: string;
  rating?: number;
  href?: string;
}
