import RssItem from "../models/rssModel";
import logger from "../utils/logger";

export const deleteOldItems = async (): Promise<void> => {
  const twoDaysAgo = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000);

  try {
    await RssItem.deleteMany({ createdAt: { $lt: twoDaysAgo } });
  } catch (error) {
    logger.error("Error deleting old items:", error);
  }
};
