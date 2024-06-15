import { feedUrls } from "../config/feeds";
import { parseRSS } from "../utils/rssParser";

export const fetchFeeds = async (): Promise<void> => {
  for (const url of feedUrls) {
    await parseRSS(url);
  }
};
