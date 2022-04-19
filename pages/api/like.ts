import { NextApiRequest, NextApiResponse } from "next";
import { dbConnect } from "../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await dbConnect();

  if (req.method == "POST") {
    const data = await db
      .collection("likes")
      .updateOne({ id: 1 }, { $inc: { likes: +1 } });
    res.status(200).send(data);
  } else if (req.method == "GET") {
    const data = await db
      .collection("likes")
      .find({ id: 1 }, { projection: { _id: 0 } })
      .toArray();
    res.status(200).send(data[0]);
  }
}
