import { model, Schema } from "mongoose";
import { IPayment, TPaymentStatus } from "./payment.interface";

const paymentSchema = new Schema<IPayment>({
  rideId: { type: Schema.Types.ObjectId, ref: "Ride", required: true },
  riderId: { type: Schema.Types.ObjectId, ref: "Rider", required: true },
  driverId: { type: Schema.Types.ObjectId, ref: "Driver", required: true },
  amount: { type: Number, min: 0 },
  status: {
    type: String,
    enum: {
      values: Object.values(TPaymentStatus),
      message: "{VALUE} is not a valid payment status",
    },
  },
  transactionId: { type: String, unique: true },
  fee: { type: Number, min: 0 },
  driverEarnings: { type: Number, min: 0 },
});

export const Payment = model<IPayment>("Payment", paymentSchema);
