import { Types } from "mongoose";
export enum TPaymentStatus {
  pending = "pending",
  completed = "completed",
  failed = "failed",
}

export interface IPayment {
  _id: string;
  rideId: Types.ObjectId;
  riderId: Types.ObjectId;
  driverId: Types.ObjectId;
  amount: number;
  status: TPaymentStatus;
  transactionId?: string;
  fee: number;
  driverEarnings: number;
}
