import Parser from "rss-parser";
import logger from "./logger";

export const parseRSS = async (url: string) => {
  const parser = new Parser();

  try {
    const feed = await parser.parseURL(url);

    const rssItems = feed.items.map((item) => ({
      title: item.title || "",
      rssId: item.guid as string,
      createdAt: new Date(),
    }));

    return rssItems;
  } catch (error) {
    logger.error(`Failed to parse feed: ${url}:`, error);
  }
};
