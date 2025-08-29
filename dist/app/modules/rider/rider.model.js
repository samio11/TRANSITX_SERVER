"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rider = void 0;
const mongoose_1 = require("mongoose");
const emergencyContactSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    relationship: { type: String, required: true },
});
const RiderSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
    emergencyContact: emergencyContactSchema,
    totalRides: { type: Number, default: 0, min: 0 },
}, {
    timestamps: true,
    versionKey: false,
});
exports.Rider = (0, mongoose_1.model)("Rider", RiderSchema);
