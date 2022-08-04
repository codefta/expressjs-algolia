require("dotenv").config();

module.exports = {
  algolia: {
    appId: process.env.ALGOLIA_APP_ID,
    clientAPIKey: process.env.ALGOLIA_CLIENT_API_KEY,
    apiKey: process.env.ALOGOLIA_API_KEY,
    indexName: process.env.ALGOLIA_INDEX_NAME,
  },
};
