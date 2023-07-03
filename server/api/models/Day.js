import mongoose, { Schema } from "mongoose";

const DaySchema = new Schema({
    date: {
        type: Date,
        default: (new Date()).toDateString(),
    },
    tasks: [{
        taskId: { type: mongoose.ObjectId }
    }],
    completion: {
        type: Number,
        default: 0,
        min: 0,
        max: 100
    }
}, { timestamps: true })

export default mongoose.model('Day', DaySchema)