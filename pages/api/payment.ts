// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import ZarinpalCheckout from "zarinpal-checkout";

type Data = {
  name: string;
};

const zarinpal = ZarinpalCheckout.create(
  "1bc54b7b-8426-4fda-af0a-8bcb88312894",
  true
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, phone, address, price, title, productId } = req.body;
  console.log(address);
  //next js api
  if (req.method === "POST") {
    //send data to api
    zarinpal
      .PaymentRequest({
        Amount: parseInt(price), // In Tomans
        CallbackURL: "https://arsenmobile.ir/api/callback",
        Description: "A Payment from Node.JS",
        Email: "hi@siamak.work",
        Mobile: "09120000000",
      })
      .then((response) => {
        if (response.status === 100) {
          res.status(200).json({
            status: "success",
            url: response.url,
          });
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({
          status: "error",
          message: err.message,
        });
      });
  }
}
