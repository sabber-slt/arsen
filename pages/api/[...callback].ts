import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { Authority, Status } = req.query;
  if (Status === "OK") {
    res.redirect(`/result/callback?Authority=${Authority}&Status=${Status}`);
  } else {
    res.redirect(`/result/callback?Authority=${Authority}&Status=${Status}`);
  }
}
