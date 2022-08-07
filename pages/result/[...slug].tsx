import { NextPage } from "next";
import { useRouter } from "next/router";
import { API_URL } from "../../hooks/useFetch";
import useUser from "../../utils/useUser";

const Payment: NextPage = () => {
  const { query } = useRouter();
  const router = useRouter();

  const { user, resetUser } = useUser();

  const handlePay = async () => {
    const res = await fetch(`${API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Hasura-Role": "public",
      },
      body: JSON.stringify({
        query: `
          mutation MyMutation($address:String,$name: String, $phone: String, $price: String, $productId: String, $title: String,$status: String) {
            insert_sefareshat(objects: {address: $address, name: $name, phone: $phone, price: $price, productId: $productId, title: $title,status:$status}) {
              returning {
                id
                phone
                name
              }
            }
          }
          `,
        variables: {
          address: user.address,
          name: user.name,
          phone: user.phone,
          price: query.price,
          productId: query.id,
          title: user.title,
          status: query.Status,
        },
      }),
    });
    const json = await res.json();
    console.log(json);
    if (query.Status == "OK") {
      confirm();
      resetUser();
      router.push("/");
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-80 md:w-[50vw] h-96 md:h-[50vh] vstack justify-around bg-zinc-700 rounded-lg">
        <p>
          {query?.Status === "OK"
            ? "پرداخت شما با موفقیت انجام شد"
            : "عملیات موفقیت آمیز نبود"}{" "}
        </p>
        <div className="vstack">
          <p>شماره سفارش: </p>
          <p className="text-xs">{query?.Authority}</p>
        </div>
        <div>
          <p>پیگیری سفارش: </p>
          <p>091211111111</p>
        </div>

        <button
          onClick={handlePay}
          className="px-5 py-3 bg-amber-400 rounded-lg text-zinc-700"
        >
          تایید نهایی
        </button>
      </div>
    </div>
  );
};
export default Payment;
