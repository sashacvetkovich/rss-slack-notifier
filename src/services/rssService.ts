import { feedUrls } from "../config/feeds";
import RssItem from "../models/rssModel";
import logger from "../utils/logger";
import { parseRSS } from "../utils/rssParser";
import {
  constructSlackMessage,
  sendSlackNotification,
} from "../utils/slackUtils";

export const fetchFeeds = async () => {
  for (const url of feedUrls) {
    try {
      const rssItems = await parseRSS(url);

      // Find existing items in the database
      const existingItems = await RssItem.find();

      // Filter out existing items from new items
      const existingItemIds = new Set(existingItems.map((item) => item.rssId));
      const itemsToInsert = rssItems?.filter(
        (item) => !existingItemIds.has(item.rssId)
      );

      if (itemsToInsert?.length) {
        await RssItem.insertMany(itemsToInsert);

        const message = constructSlackMessage(itemsToInsert);

        await sendSlackNotification(message);
      }
    } catch (error) {
      logger.error("Failed to save new items to db.", error);
    }
  }
};
