import { model, Schema } from "mongoose";
import { IEmergencyContact, IRider } from "./rider.interface";

const emergencyContactSchema = new Schema<IEmergencyContact>({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  relationship: { type: String, required: true },
});

const RiderSchema = new Schema<IRider>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    emergencyContact: emergencyContactSchema,
    totalRides: { type: Number, default: 0, min: 0 },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Rider = model<IRider>("Rider", RiderSchema);
