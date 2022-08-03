export interface HomeProps {
  attributes: {
    title: string;
    content: string;
    media?: string;
    slug?: string;
    price?: string;
  };
  id: number;
}

export type PublicProps = Omit<HomeProps, "id">;
