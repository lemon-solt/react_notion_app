// TODO: 追加したいテーブルのIDをNotionから取得してください。
const NOTION_INQUIRY_DB_ID: string = "table id";

export type ContactModelType = {
  clientManager: string;
  contactAddress: string;
  askTheme: string;
  priority: string;
  content: string;
};

export const contentsCreator = (block_type: string, content: string) => {
  return {
    object: "block",
    type: block_type,
    [block_type]: {
      rich_text: [
        {
          type: "text",
          text: { content: content },
        },
      ],
    },
  };
};

export const createInquieryParams = (model: ContactModelType) => {
  const postData = {
    parent: { database_id: NOTION_INQUIRY_DB_ID },
    properties: {
      ["担当者"]: {
        title: [
          {
            text: {
              content: model.clientManager,
            },
          },
        ],
      },
      ["連絡先"]: {
        rich_text: [{ text: { content: model.contactAddress } }],
      },
      ["用件概要"]: {
        select: { name: model.askTheme },
      },
      ["緊急度"]: {
        select: { name: model.priority },
      },
      ["状況"]: {
        select: { name: "新規" },
      },
    },
    children: [contentsCreator("paragraph", model.content)],
  };

  return JSON.stringify(postData);
};
