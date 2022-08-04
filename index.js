const { v4: uuid } = require("uuid");
const algolia = require("algoliasearch");
const configs = require("./configs");

const client = algolia(configs.algolia.appId, configs.algolia.apiKey);

async function seedDataToIndex(indexName, data) {
  const index = client.initIndex(indexName);
  await index.saveObjects(
    data.map((item) => {
      const data = {
        objectID: uuid(),
        ...item,
      };
      delete data.id;
      return data;
    })
  );
}

seedDataToIndex("products", require("./data.json"));
