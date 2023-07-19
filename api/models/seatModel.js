import mongoose from "mongoose";

const seatSchema = new mongoose.Schema({
    section: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    maxPeople: {
        type: Number,
        required: true,
      },
      desc: {
        type: String,
        required: true,
      },
    seatNumbers: [{number: Number, unavailableDates: {type: [Date]} }],
}, { timestamps: true }
);

export default mongoose.model("Seat", seatSchema)