import Parser from "rss-parser";
import logger from "./logger";
import { RssItemType } from "../types/rssTypes";
import RssItem from "../models/rssModel";
import { sendSlackNotification } from "./slackNotifier";

const parser = new Parser();

export const parseRSS = async (url: string): Promise<void> => {
  try {
    const feed = await parser.parseURL(url);
    let message = "";

    for (const item of feed.items as RssItemType[]) {
      const existingItem = await RssItem.findOne({ rssId: item.guid });

      if (!existingItem) {
        const newItem = new RssItem({
          title: item.title,
          rssId: item.guid,
          createdAt: new Date(),
        });

        await newItem.save();

        const newItemMessage = `New item has been added: ${item.title} \n${item.link}\n\n`;
        message += newItemMessage;
      }
    }

    if (message) await sendSlackNotification(message);
  } catch (error) {
    logger.error(`Error fetching or parsing feed ${url}:`, error);
  }
};
