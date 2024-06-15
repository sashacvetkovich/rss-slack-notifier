import Parser  from 'rss-parser';
import logger from './logger';
import { RssItemType } from '../types/rssTypes';
import RssItem from '../models/rssModel';

const parser = new Parser();

export const parseRSS = async (url: string): Promise<void> => {
  try {
    const feed  = await parser.parseURL(url);
    for (const item of feed.items as RssItemType[]) {
      const existingItem = await RssItem.findOne({ rssId: item.guid });

      if (!existingItem) {
        const newItem = new RssItem({
          title: item.title,
          rssId: item.guid,
          date: item.isoDate
        });
        await newItem.save();
        logger.info(`New item saved: ${item.title}`);
      }
    }
  } catch (error) {
    logger.error(`Error fetching or parsing feed ${url}:`, error);
  }
};
