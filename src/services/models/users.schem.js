//user.schem.js
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
   firstname: String,
   lastname: String,
   password: String,
   email: String,
   businessSize: String,
   legalForm: String,
   transactionForm: String,
   turnoverIndication: Number,
   companyHistory: String,
   other: String,
   companyName: String,
   budget: Number,
   askingPrice: Number,
   photo: String, // Photo's URL
});


export const UserModel = mongoose.models.User || mongoose.model('User', UserSchema);

