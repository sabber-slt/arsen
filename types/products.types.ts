export interface ProductProps {
  attributes: {
    title: string;
    description: string;
    media1?: string;
    media2?: string;
    slug?: string;
    price?: string;
  };
  id: number;
}
