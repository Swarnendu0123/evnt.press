import { model, Schema } from "mongoose";

const eventSchema = new Schema({
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

const userSchema = new Schema({
  name: String,
  email: String,
  //   other details
});

const organizationSchema = new Schema({
  name: String,
  //   other details
});

export const EventModel = model("Event", eventSchema);
export const UserModel = model("User", userSchema);
export const OrganizationModel = model("Organization", organizationSchema);
