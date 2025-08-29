"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
const mongoose_1 = require("mongoose");
const payment_interface_1 = require("./payment.interface");
const paymentSchema = new mongoose_1.Schema({
    rideId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Ride", required: true },
    riderId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Rider", required: true },
    driverId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Driver", required: true },
    amount: { type: Number, min: 0 },
    status: {
        type: String,
        enum: {
            values: Object.values(payment_interface_1.TPaymentStatus),
            message: "{VALUE} is not a valid payment status",
        },
    },
    transactionId: { type: String, unique: true },
    fee: { type: Number, min: 0 },
    driverEarnings: { type: Number, min: 0 },
});
exports.Payment = (0, mongoose_1.model)("Payment", paymentSchema);
