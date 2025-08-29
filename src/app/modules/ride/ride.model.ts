import { model, Schema } from "mongoose";
import { ILocation, IRide, IRideStatus } from "./ride.interface";
import { TPaymentStatus } from "../payment/payment.interface";

const RideLocationSchema = new Schema<ILocation>(
  {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  { versionKey: false }
);

const RideSchema = new Schema<IRide>(
  {
    riderId: { type: Schema.Types.ObjectId, ref: "Rider", required: true },
    driverId: { type: Schema.Types.ObjectId, ref: "Driver", required: true },
    pickupLocation: { type: RideLocationSchema },
    destination: { type: RideLocationSchema },
    status: {
      type: String,
      enum: {
        values: Object.values(IRideStatus),
        message: "{VALUE} is not valid RideStatus",
      },
      default: IRideStatus.requested,
    },
    estimatedFare: { type: Number, min: 0 },
    actualFare: { type: Number, min: 0 },
    distance: { type: Number, min: 0 },
    duration: { type: Number, min: 0 },
    paymentStatus: {
      type: String,
      enum: {
        values: Object.values(TPaymentStatus),
        message: "{VALUE} is not valid Payment Status",
      },
      default: TPaymentStatus.pending,
    },
    isPaid: { type: Boolean, default: false },
    driverRating: { type: Number, min: 0 },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Ride = model<IRide>("Ride", RideSchema);
