import mongoose, { Document, Model, Schema, model } from "mongoose";

// Define the document interface
export interface IMatching extends Document {
  buyer_id: mongoose.Schema.Types.ObjectId;
  seller_id: mongoose.Schema.Types.ObjectId;
  score: number;
}

// Define the model interface including the static method
export interface IMatchingModel extends Model<IMatching> {
  findByBuyerAndSeller(
    buyer_id: string,
    seller_id: string
  ): Promise<IMatching | null>;
}

// Define the schema
const MatchingSchema: Schema<IMatching> = new Schema({
  buyer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "BuyerAlias",
    required: true,
  },
  seller_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SellerAlias",
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});

// Define the static method
MatchingSchema.statics.findByBuyerAndSeller = async function (
  buyer_id: string,
  seller_id: string
) {
  const matched = await this.findOne({
    buyer_id: new mongoose.Types.ObjectId(buyer_id),
    seller_id: new mongoose.Types.ObjectId(seller_id),
  });

  return matched;
};

// Create and export the model
export const Matching =
  (mongoose.models.Matching as IMatchingModel) ||
  model<IMatching, IMatchingModel>("Matching", MatchingSchema);
