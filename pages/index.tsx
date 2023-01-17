import type { NextPage } from "next";
import axios from "axios";

import styles from "../styles/Home.module.css";
import { ContactModelType } from "../service/notionService";
import { inquiryPost } from "../repository/contactApiRepository";

const NOTION_BASE_URL: string = "https://api.notion.com/v1";

// TODO: Notionの秘密鍵を取得してください。 Seacre_xxxxxx
const NOTION_TOKEN: string = "notion your token";

const NOTION_HEADERS = {
  ContentType: "application/json",
  Authorization: "Bearer " + NOTION_TOKEN,
  NotionVersion: "2022-06-28",
};

const instance = axios.create({
  baseURL: NOTION_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: NOTION_HEADERS.Authorization,
    "Notion-Version": NOTION_HEADERS.NotionVersion,
  },
});

export const createNotion = async (params: string) => {
  console.log("creation notion");
  const response = await instance({
    url: "/pages",
    method: "POST",
    data: params,
  });
  return { status: response.status, data: response.data };
};

const Home: NextPage = () => {
  const notionSendHandler = async () => {
    const contactModel: ContactModelType = {
      clientManager: "担当者",
      contactAddress: "連絡先",
      askTheme: "概要",
      priority: "優先度",
      content: "内容",
    };

    try {
      const response = await inquiryPost(contactModel);
      console.log("response: ", response);
    } catch (e) {
      console.log("error: ", e);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        Notion x React
        {/* send action */}
        <button onClick={notionSendHandler}>send notion</button>
      </div>
    </div>
  );
};

export default Home;
