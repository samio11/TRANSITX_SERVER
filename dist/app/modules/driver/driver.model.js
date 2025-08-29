"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Driver = void 0;
const mongoose_1 = require("mongoose");
const driver_interface_1 = require("./driver.interface");
const VehicleSchema = new mongoose_1.Schema({
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true, min: 1900 },
    color: { type: String, required: true },
    licensePlate: { type: String, required: true },
    capacity: { type: Number, required: true, min: 2 },
    vehicleType: {
        type: String,
        enum: {
            values: Object.values(driver_interface_1.EVehicle),
            message: "{VALUES} is a valid vehicle type",
        },
    },
});
const DriverSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
    vehicle: VehicleSchema,
    licenseNumber: { type: String, required: true },
    isOnline: { type: Boolean, default: true },
    isAvailable: { type: Boolean, default: true },
    rating: { type: Number, min: 0 },
    totalTrips: { type: Number, min: 0 },
    totalEarnings: { type: Number, min: 0 },
    approved: { type: Boolean },
}, {
    timestamps: true,
    versionKey: false,
});
exports.Driver = (0, mongoose_1.model)("Driver", DriverSchema);
