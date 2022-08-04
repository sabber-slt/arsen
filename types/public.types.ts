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
  id: number;
}

export interface MainProps {
  public: HomeProps[];
  shegeftAngiz: OfferProps[];
}

export type PublicProps = Omit<HomeProps, "id">;
