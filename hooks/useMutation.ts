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

export const handlePay = async (
  address: string,
  name: string | null,
  phone: string | null,
  price: string | string[] | undefined,
  productId: string | string[] | undefined,
  title: string | string[] | undefined,
  status: string | string[] | undefined,
  authority: string | string[] | undefined,
  post: string | string[] | undefined
) => {
  const res = await fetch(`${API_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Hasura-Role": "public",
    },
    body: JSON.stringify({
      query: `
          mutation MyMutation($address:String,$name: String, $phone: String, $price: String, $productId: String, $title: String,$status: String,$authority:String,$post:String) {
            insert_sefareshat(objects: {address: $address, name: $name, phone: $phone, price: $price, productId: $productId, title: $title,status:$status,authority:$authority,post:$post}) {
              returning {
                id
                phone
                name
              }
            }
          }
          `,
      variables: {
        address,
        name,
        phone,
        price,
        productId,
        title,
        status,
        authority,
        post,
      },
    }),
  });
  const json = await res.json();
  console.log(json);
  return json;
};
