"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ride = void 0;
const mongoose_1 = require("mongoose");
const ride_interface_1 = require("./ride.interface");
const payment_interface_1 = require("../payment/payment.interface");
const RideLocationSchema = new mongoose_1.Schema({
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
}, { versionKey: false });
const RideSchema = new mongoose_1.Schema({
    riderId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Rider", required: true },
    driverId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Driver", required: true },
    pickupLocation: { type: RideLocationSchema },
    destination: { type: RideLocationSchema },
    status: {
        type: String,
        enum: {
            values: Object.values(ride_interface_1.IRideStatus),
            message: "{VALUE} is not valid RideStatus",
        },
        default: ride_interface_1.IRideStatus.requested,
    },
    estimatedFare: { type: Number, min: 0 },
    actualFare: { type: Number, min: 0 },
    distance: { type: Number, min: 0 },
    duration: { type: Number, min: 0 },
    paymentStatus: {
        type: String,
        enum: {
            values: Object.values(payment_interface_1.TPaymentStatus),
            message: "{VALUE} is not valid Payment Status",
        },
        default: payment_interface_1.TPaymentStatus.pending,
    },
    isPaid: { type: Boolean, default: false },
    driverRating: { type: Number, min: 0 },
}, {
    timestamps: true,
    versionKey: false,
});
exports.Ride = (0, mongoose_1.model)("Ride", RideSchema);
