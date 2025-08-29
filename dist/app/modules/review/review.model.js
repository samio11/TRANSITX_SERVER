"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Review = void 0;
const mongoose_1 = require("mongoose");
const reviewSchema = new mongoose_1.Schema({
    rideId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Ride", required: true },
    riderId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Rider", required: true },
    driverId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Driver", required: true },
    rating: { type: Number, min: 1, max: 5 },
    comment: { type: String },
});
exports.Review = (0, mongoose_1.model)("Review", reviewSchema);
