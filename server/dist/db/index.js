"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDB = connectToDB;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv = require("dotenv");
dotenv.config();
function connectToDB() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const DB_URL = process.env.MONGODB_URL;
            if (!DB_URL) {
                throw new Error("[server/src/db/index.ts]: DB_URL not found in .env file");
            }
            yield mongoose_1.default.connect(DB_URL);
            console.log("[server/src/db/index.ts]: Connected to DB!");
        }
        catch (e) {
            console.log("[server/src/db/index.ts]: Failed to connect with DB, try to connect to your personal wifi :)");
        }
    });
}
//# sourceMappingURL=index.js.map