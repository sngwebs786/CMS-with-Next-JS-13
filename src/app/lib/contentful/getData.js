import { client } from "./client";

export const getData = async () => {
  const response = await client.getEntries({ content_type: "benisonblogs" });
  return response;
};
