export const API_URL = "https://arsenmobile.hasura.app/v1/graphql";
export const API_URL0 = "https://arsenmobile1.hasura.app/v1/graphql";

export const fetchProducts = async (type: string) => {
  const response = await fetch(`${API_URL0}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Hasura-Role": "public",
    },
    body: JSON.stringify({
      query: `
      query MyQuery($type: String) {
        products(where: {type: {_eq: $type}}) {
          brand
          brand_child
          category
          color
          content
          desc
          id
          media
          media1
          media2
          old_price
          price
          title
          type
          use
          show_price
          code
        }    

      }
      `,
      variables: {
        type: type,
      },
    }),
  });
  const data = await response.json();
  return data?.data?.products;
};

export const fetchAbout = async () => {
  const response = await fetch(`${API_URL0}`, {
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
  const response = await fetch(`${API_URL0}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Hasura-Role": "public",
    },
    body: JSON.stringify({
      query: `
      query MyQuery {
        products {
          color
          category
          brand_child
          brand
          content
          desc
          id
          media
          media1
          media2
          old_price
          price
          title
          type
          use
          show_price
          code
        }
      }
      
      
      
      `,
    }),
  });
  const data = await response.json();
  return data?.data?.products;
};

export const fetchTitles = async () => {
  const response = await fetch(`${API_URL0}`, {
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

export const fetchHome = async () => {
  const response = await fetch("https://arsenmobile1.hasura.app/v1/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Hasura-Role": "public",
    },
    body: JSON.stringify({
      query: `
      query MyQuery {
        products(where: {category: {_is_null: false}}) {
          brand
          brand_child
          category
          color
          content
          desc
          id
          media
          media1
          media2
          old_price
          price
          title
          type
          use
          show_price
          code
        }
        public(order_by: {id: asc}) {
          content
          id
          media
          title
        }
      }  
      `,
    }),
  });
  const data = await response.json();
  return data?.data;
};
