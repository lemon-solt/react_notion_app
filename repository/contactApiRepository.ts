import axios from "axios";
import { ContactModel } from "../model/ContactModel";

export type inquiryType = {
  status: number;
  params: ContactModel;
};

export const inquiryPost = async (params: ContactModel) => {
  const response = await axios.post("/api/contact", params);
  return { status: response.status, params } as inquiryType;
};
