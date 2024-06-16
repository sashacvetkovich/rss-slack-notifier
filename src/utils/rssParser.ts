import Parser from "rss-parser";
import logger from "./logger";
import RssItem from "../models/rssModel";
import { sendSlackNotification } from "./slackNotifier";

const parser = new Parser();

export const parseRSS = async (url: string) => {
  try {
    const feed = await parser.parseURL(url);
    let message = "";

    // Collect all new items
    const newItems = feed.items.map((item) => ({
      title: item.tile,
      rssId: item.guid as string,
      createdAt: item.isoDate,
    }));

    // Find existing items in the database
    const existingItems = (await RssItem.find()).map((item) => ({
      title: item.title,
      rssId: item.rssId,
      createdAt: item.createdAt,
    }));

    // Filter out existing items from new items
    const existingItemIds = new Set(existingItems.map((item) => item.rssId));
    const itemsToInsert = newItems.filter(
      (item) => !existingItemIds.has(item.rssId)
    );

    // Insert new items
    if (itemsToInsert.length) {
      await RssItem.insertMany(itemsToInsert);

      // Construct the Slack message
      itemsToInsert.forEach((item) => {
        const newItemMessage = `New item has been added: ${item.title} \n${item.rssId}\n\n`;
        message += newItemMessage;
      });

      await sendSlackNotification(message);
    }
  } catch (error) {
    logger.error(`Error fetching or parsing feed ${url}:`, error);
  }
};
