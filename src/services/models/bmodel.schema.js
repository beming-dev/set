// contact.schema.js
import mongoose from "mongoose";

const BModelSchema = new mongoose.Schema({
  key: {
    type: String,
  },
  industry: {
    type: String,
  },
  type: {
    type: String,
  },
  country: {
    type: String,
  },
  region: {
    type: String,
  },
  employee: {
    type: String,
  },
  age: {
    type: String,
  },
  provisionalContract: {
    type: String,
  },
  euro: {
    type: String,
    default: "0",
  },
  content: {
    type: String,
    default: "",
  },
});

export const BModel =
  mongoose.models.BModel || mongoose.model("BModel", BModelSchema);
