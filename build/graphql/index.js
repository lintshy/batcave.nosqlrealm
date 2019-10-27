"use strict";
exports.__esModule = true;
var graphqlHTTP = require('express-graphql');
var schema_1 = require("./schema");
var root_1 = require("./root");
exports.graphqlSetup = graphqlHTTP({
    schema: schema_1.schema,
    rootValue: root_1.rootValue,
    graphiql: true
});
//# sourceMappingURL=index.js.map