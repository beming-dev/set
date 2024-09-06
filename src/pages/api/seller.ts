import { UserModel } from "../../services/models/users.schem";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "../../db/config";
import jwt from "jsonwebtoken";
import BuyerAlias, { IBuyerAlias } from "../../services/models/buyer.schema";
import {
  calculateMarginTier,
  calculateMarketValueTier,
  calculateRevenueTier,
} from "../../util/calculator";

export default async function handler(req, res) {
  try {
    await connectDB();

    const data: Partial<IBuyerAlias> = req.body;

    if (data.revenue) {
      data.revenue = calculateRevenueTier(data.revenue);
    }
    if (data.valuation) {
      data.valuation = calculateMarketValueTier(data.valuation);
    }
    if (data.profitMargins) {
      data.profitMargins = calculateMarginTier(data.profitMargins);
    }

    await BuyerAlias.create(data);

    res.status(201).json({
      message: "Buyer registered successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
}
