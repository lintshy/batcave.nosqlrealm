"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var graphql_1 = require("../graphql");
require('dotenv').config();
var app = express_1["default"]();
var port = process.env.PORT;
app.use('/iptv', body_parser_1["default"].json(), graphql_1.graphqlSetup);
app.listen(port, function () { return console.log("Example app listening on port " + port + "!"); });
//# sourceMappingURL=app.js.map