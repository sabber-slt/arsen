export interface PublicProp {
  title: string;
  content: string;
  media?: string;
  id: number;
}

export interface ProTypes {
  title: string;
  content: string;
  media?: string;
  media1?: string;
  media2?: string;
  old_price?: string;
  color?: string;
  price?: string;
  desc?: string;
  brand?: string;
  category?: string;
  type?: string;
  use?: string;
  show_price?: string;
  id: number;
}

export interface AboutProps {
  title1: string;
  title2?: string;
  title3?: string;
  content1: string;
  content2?: string;
  content3?: string;
  media1?: string;
  media2?: string;
}

export interface MainProps {
  public: PublicProp[];
  products: ProTypes[];
  other: ProTypes[];
}

export interface Sefareshat {
  title: string;
  status: string;
  productId: string;
  authority: string;
  post: string;
  price: string;
  phone: string;
  address: string;
  name: string;
  id: number;
}
