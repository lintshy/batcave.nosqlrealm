"use strict";
exports.__esModule = true;
var graphql_1 = require("graphql");
exports.schema = graphql_1.buildSchema("\n    type Channel{\n        tvgId: String,\n        tvgName: String,\n        tvgLogo: String,\n        groupTitle: String,\n        url: String\n    }\n    type RootQuery{\n        channels:[Channel]!\n    }\n    type RootMutation{\n        addChannel(name: String):String\n    }\n    schema{\n            query: RootQuery\n            mutation: RootMutation\n    }\n");
//# sourceMappingURL=schema.js.map