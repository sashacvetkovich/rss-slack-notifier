import cron from "node-cron";

import { fetchFeeds } from "../services/rssService";
import { deleteOldItems } from "../services/cleanupService";

cron.schedule("* * * * *", fetchFeeds);
cron.schedule("0 0 0 * * *", deleteOldItems);
