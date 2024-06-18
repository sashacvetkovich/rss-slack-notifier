
# Instant Upwork Job Notifications on Slack

## Introduction

This Express.js project automatically notifies users via Slack when new job postings on Upwork match their specified search criteria. By monitoring Upwork's RSS feeds, the system fetches and parses job listings in real-time, saving relevant data to a MongoDB database and instantly sending Slack notifications for new matching jobs.

## Installation
To set up and run the project, follow these steps:

1. **Clone the Repository:** `git clone https://github.com/sashacvetkovich/rss-slack-notifier.git`
2. **Open Repository Directory:** `cd rss-slack-notifier`
3. **Install Dependencies:** `npm install`
4. **Build the Project:** `npm run build`
5. **Start the Application:** `npm start`

Make sure you have Node.js and npm installed on your machine. Once the application is running, it will start monitoring Upwork job postings and send instant notifications to your specified Slack channel for any new jobs that match your search criteria.

### How to Obtain Environment Variables

**SLACK_CHANNEL_ID**

Right-click on the channel and select "View channel details."
![](https://i.ibb.co/1TWCB88/Screenshot-from-2024-06-18-17-04-14.jpg)

**SLACK_TOKEN:**
- Go to the [Slack API Page](https://api.slack.com/apps) and click the "Create New App" button.
- Select 'From scratch' and provide a name for your app, then choose the desired workspace.
- Under the Basic Information section, under the “Add features and functionality” section, click on the “Permissions” tab. You will be redirected to the "OAuth & Permissions" page, where you should scroll to the "Scopes" section and select the permissions shown in the screenshot below:
  
![](https://i.ibb.co/y0nyns2/Screenshot-from-2024-06-18-16-39-52.png)
- Then click on the "Install to workspace" button. After allowing the app to install, you'll be redirected back to the same page, and this time, the OAuth token will be visible.

![](https://i.ibb.co/52fKk9v/cbf2wmj31f3vqijzyn6y.png)
  
**RSS_FEED_URLS:**
- Go to Upwork and perform a search using your desired criteria.
- On the search results page, find the RSS feed link and copy the URL.
![](https://i.ibb.co/5FwFLYY/Screenshot-from-2024-06-18-16-49-34.jpg)
 - You can add multiple links; they need to be separated with commas (,).

**MONGO_URI:**
- Sign up for a MongoDB service such as [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) if you don't already have one.
- Create a new cluster and database, then obtain the connection string (URI) from the MongoDB Atlas dashboard.
