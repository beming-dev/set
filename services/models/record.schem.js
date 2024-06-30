import mongoose from "mongoose";


const RecordSchema = new mongoose.Schema({
    email: {
        type: String,
        default: ''
    },
    action: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

export const RecordModel = mongoose.models.Record || mongoose.model('Record', RecordSchema);
