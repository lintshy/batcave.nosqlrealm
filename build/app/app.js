"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
require('dotenv').config();
var app = express_1["default"]();
var port = process.env.PORT;
app.get('/', function (req, res) { return res.send('Hello World!'); });
app.listen(port, function () { return console.log("Example app listening on port " + port + "!"); });
//# sourceMappingURL=app.js.map