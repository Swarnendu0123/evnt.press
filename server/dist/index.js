"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./db");
const event_1 = __importDefault(require("./api/v1/event"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
(0, db_1.connectToDB)();
// middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// root route
app.get("/", (req, res) => {
    //   redirect to /api/v1
    res.redirect("/api/v1");
});
app.use("/api/v1", event_1.default);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map