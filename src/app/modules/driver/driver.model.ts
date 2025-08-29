import { model, Schema } from "mongoose";
import { EVehicle, IDriver, IVehicle } from "./driver.interface";

const VehicleSchema = new Schema<IVehicle>({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true, min: 1900 },
  color: { type: String, required: true },
  licensePlate: { type: String, required: true },
  capacity: { type: Number, required: true, min: 2 },
  vehicleType: {
    type: String,
    enum: {
      values: Object.values(EVehicle),
      message: "{VALUES} is a valid vehicle type",
    },
  },
});

const DriverSchema = new Schema<IDriver>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    vehicle: VehicleSchema,
    licenseNumber: { type: String, required: true },
    isOnline: { type: Boolean, default: true },
    isAvailable: { type: Boolean, default: true },
    rating: { type: Number, min: 0 },
    totalTrips: { type: Number, min: 0 },
    totalEarnings: { type: Number, min: 0 },
    approved: { type: Boolean },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Driver = model<IDriver>("Driver", DriverSchema);
