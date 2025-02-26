"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationModel = exports.UserModel = exports.EventModel = void 0;
const mongoose_1 = require("mongoose");
const eventSchema = new mongoose_1.Schema({
    id: Number,
    name: String,
    org_name: String,
    date: String,
    registration: String,
    registration_fee: Number,
    image: String,
    registered: Number,
    location: String,
    verified: Boolean,
});
const userSchema = new mongoose_1.Schema({
    name: String,
    email: String,
    //   other details
});
const organizationSchema = new mongoose_1.Schema({
    name: String,
    //   other details
});
exports.EventModel = (0, mongoose_1.model)("Event", eventSchema);
exports.UserModel = (0, mongoose_1.model)("User", userSchema);
exports.OrganizationModel = (0, mongoose_1.model)("Organization", organizationSchema);
//# sourceMappingURL=index.js.map