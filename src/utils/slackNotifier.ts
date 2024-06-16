import logger from "./logger";
import { WebClient } from "@slack/web-api";

export const sendSlackNotification = async (message: string) => {
  const channelId = process.env.SLACK_CHANNEL_ID as string;

  try {
    const webClient = new WebClient(process.env.SLACK_TOKEN);

    await webClient.chat.postMessage({
      text: message,
      channel: channelId,
    });
  } catch (error) {
    logger.error("Failed to send Slack message", error);
  }
};
