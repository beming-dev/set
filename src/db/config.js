import mongoose from "mongoose";


export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://jiashengxu2002:Aa1773117640@set.mjgnxh0.mongodb.net/business');
        console.log('connect');
    } catch (err) {
        console.log(err);
    }
}