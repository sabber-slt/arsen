export interface HomeProps {
  title: string;
  content: string;
  media?: string;
  id: number;
}
export interface OfferProps {
  title: string;
  content: string;
  media?: string;
  media1?: string;
  media2?: string;
  media3?: string;
  old_price?: string;
  mojod?: string;
  color1?: string;
  color2?: string;
  color3?: string;
  price?: string;
  desc?: string;
  brand?: string;
  type?: string;
  use?: string;
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
  public: HomeProps[];
  shegeftAngiz: OfferProps[];
}

export type PublicProps = Omit<HomeProps, "id">;
