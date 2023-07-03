import mongoose, { Schema } from "mongoose";

const StreakSchema = new Schema({
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
}, { timestamps: true })

export default mongoose.model('Streak', StreakSchema)