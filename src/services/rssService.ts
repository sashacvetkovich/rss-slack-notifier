import { feedUrls } from "../config/feeds";
import { parseRSS } from "../utils/rssParser";

export const fetchFeeds = async () => {
  for (const url of feedUrls) {
    await parseRSS(url);
  }
};
