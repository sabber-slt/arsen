export const API_URL = "https://arsenmobile.hasura.app/v1/graphql";

export const fetchTopProducts = async () => {
  const response = await fetch(`${API_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Hasura-Role": "public",
    },
    body: JSON.stringify({
      query: `
      query MyQuery {
        top_Products {
          content
          desc
          id
          media
          media1
          media2
          old_price
          price
          title
          mojod
          color1
          color2
          color3
          brand
        }
      }
      
      `,
    }),
  });
  const data = await response.json();
  return data?.data?.top_Products;
};

export const fetchProducts = async (brand: string) => {
  const response = await fetch(`${API_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Hasura-Role": "public",
    },
    body: JSON.stringify({
      query: `
      query MyQuery($brand: String) {
        products(where: {brand: {_eq: $brand}}) {
          brand
          color1
          color2
          content
          desc
          id
          media
          media1
          media2
          media3
          old_price
          price
          title
          mojod
        }
      }     
      `,
      variables: {
        brand,
      },
    }),
  });
  const data = await response.json();
  return data?.data?.products;
};
