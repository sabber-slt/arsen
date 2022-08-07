export const API_URL = "https://arsenmobile.hasura.app/v1/graphql";

export const fetchItems = async (id: number) => {
  const response = await fetch(`${API_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Hasura-Role": "public",
    },
    body: JSON.stringify({
      query: `
        query MyQuery($id: Int) {
            products(where: {id: {_eq: $id}}) {
              title
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
              use
            }
          }   
        `,
      variables: {
        id,
      },
    }),
  });
  const data = await response.json();
  return data?.data?.products;
};
