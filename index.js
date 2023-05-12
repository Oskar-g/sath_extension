"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = process.env.PORT;
const HOST = process.env.HOST;
const STATICS = process.env.STATICS;
console.log(__dirname, PORT, HOST, STATICS);
const app = (0, express_1.default)();
app.use(express_1.default.static(__dirname + STATICS));
app.get("/", (req, res) => {
    res.send('Express + TypeScript Server');
});
app.listen(PORT, () => console.log(`⚡️[server]: Server is running at ${HOST}:${PORT}`));
