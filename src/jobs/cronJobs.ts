import cron from "node-cron";

import { fetchFeeds } from "../services/rssService";

cron.schedule("* * * * *", fetchFeeds);
