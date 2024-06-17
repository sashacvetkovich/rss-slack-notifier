import RssItem from "../models/rssModel";
import logger from "../utils/logger";

export const deleteOldItems = async (): Promise<void> => {
  const twoDaysAgo = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000);

  try {
    const result = await RssItem.deleteMany({ createdAt: { $lt: twoDaysAgo } });

    if (result.deletedCount) {
      logger.info("Old items have been successfully deleted from the database");
    }
  } catch (error) {
    logger.error("Error deleting old items:", error);
  }
};
