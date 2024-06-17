export const getFeedUrls = () => {
  const feedUrlString = process.env.RSS_FEED_URLS as string;

  return feedUrlString.split(",");
};
