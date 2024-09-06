// contact.schema.js
import mongoose from "mongoose";

const BusinessSchema = new mongoose.Schema({
  size: {
    type: Number,
    required: true,
  },
  transaction: {
    type: String,
    enum: ["Fully sell", "Merge"],
  },
  turnover: {
    type: Number,
    required: true,
  },
  budget: {
    type: Number,
  },
  industry: {
    type: String,
    enum: [
      "Restaurants",
      "Fast Food",
      "Cafes",
      "Tea Rooms",
      "Estates",
      "Farm Experiences",
      "Vineyards",
      "Eco-Tourism Attractions",
      "Speciality Food",
      "Gift and Souvenir shop",
      "Art and Craft Markets",
    ],
  },
  location: {
    type: String,
    enum: [
      "North Holland",
      "South Holland",
      "Friesland",
      "Gelderland",
      "Limburg",
      "North Brabant",
      "Utrecht",
      "Overijssel",
      "Zeeland",
      "Drenthe",
      "Groningen",
      "Flevoland",
    ],
  },
  assets: {
    type: String,
    enum: [
      "Tangible Assets",
      "Intangible Assets",
      "Financial Assets",
      "Human Capital",
      "Real Estate Investment",
      "Natural Resources",
      "Infrastructure",
      "Contracts and Agreements",
      "Research and Development (R&D)",
      "Other Assets",
    ],
  },
  age: {
    type: Number,
    default: 1,
  },
});

export const BusinessModel =
  mongoose.models.Business || mongoose.model("Business", BusinessSchema);
