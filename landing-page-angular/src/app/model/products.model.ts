export interface IProduct {
  products: IProductDetails[];
  total: number;
  skip: number;
  limit: number;
}

export interface IProductDetails {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
