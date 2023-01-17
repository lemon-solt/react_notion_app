import type { NextApiRequest, NextApiResponse } from "next";
import { createNotion } from "..";
import {
  ContactModelType,
  createInquieryParams,
} from "../../service/notionService";

type Data = {
  status: number;
  data: any;
};

export default async function businessContactHandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const contactModel = req.body as ContactModelType;
  const params = createInquieryParams(contactModel);
  const response = await createNotion(params);
  res.status(200).json({ status: response.status, data: response.data });
}
