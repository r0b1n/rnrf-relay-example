// `babel-relay-plugin` returns a function for creating plugin instances
const getBabelRelayPlugin = require('babel-relay-plugin');



// load previously saved schema data (see "Schema JSON" below)
const schemaData = require('../../relay-starter-kit/data/schema.json');

module.exports = getBabelRelayPlugin(schemaData.data);
