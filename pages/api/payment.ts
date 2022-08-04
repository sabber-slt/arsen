// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name, phone, address, price, title, productId } = req.body;
  console.log(address);
  //next js api
  if (req.method === "POST") {
    //send data to api
    const send = await fetch("https://api.idpay.ir/v1.1/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": "a09ce9fe-09ff-4094-94b4-383ac45bdeec",
        "X-SANDBOX": "1",
      },
      body: JSON.stringify({
        order_id: productId,
        amount: 2000,
        callback: "http://127.0.0.1:3000/result/callback",
      }),
    });
    const data = await send.json();
    res.status(200).json(data);
  }
}
