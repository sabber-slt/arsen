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
          type
          use
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
          type
          use

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

export const fetchAbout = async () => {
  const response = await fetch(`${API_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Hasura-Role": "public",
    },
    body: JSON.stringify({
      query: `
      query MyQuery {
        about {
          content1
          content2
          content3
          media1
          media2
          title1
          title2
          title3
        }
      }
      
      `,
    }),
  });
  const data = await response.json();
  return data?.data?.about[0];
};

export const fetchAllProducts = async () => {
  const response = await fetch(`${API_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Hasura-Role": "public",
    },
    body: JSON.stringify({
      query: `
      query MyQuery {
        products(order_by: {id: desc}) {
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
          mojod
          old_price
          price
          title
          type
          use
        }
      }
      
      
      `,
    }),
  });
  const data = await response.json();
  return data?.data?.products;
};

export const fetchFilters = async (
  brand: string | string[] | undefined,
  type: string | string[] | undefined,
  color1: string | string[] | undefined,
  use: string | string[] | undefined
) => {
  const response = await fetch(`${API_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Hasura-Role": "public",
    },
    body: JSON.stringify({
      query: `
      query MyQuery($brand: String, $color1: String, $type: String , $use: String ) {
        products(where: {brand: {_eq: $brand}, color1: {_eq: $color1}, type: {_eq: $type}, use: {_eq: $use}}) {
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
          mojod
          old_price
          price
          type
          title
          use
        }
      }
      
      `,
      variables: {
        brand,
        type,
        color1,
        use,
      },
    }),
  });
  const data = await response.json();
  return data?.data?.products;
};

export const fetchTitles = async () => {
  const response = await fetch(`${API_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Hasura-Role": "public",
    },
    body: JSON.stringify({
      query: `
      query MyQuery {
        products {
          title
          id
        }
      }   
      `,
    }),
  });
  const data = await response.json();
  return data?.data?.products;
};
