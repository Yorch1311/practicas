import * as mongoose from "mongoose";

export const FlightSchema = new mongoose.Schema({
    pilot: { type: String, required: true },
    airplane: { type: String, requierd: true },
    destinationCity: { type: String, requiered: true },
    flightDate: { type: Date, requiered: true },
    passenger: [{ type: mongoose.Schema.Types.ObjectId, ref: 'passengers' }]
},{ timestamps: true }
);