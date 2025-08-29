import { Types } from "mongoose";
import { TPaymentStatus } from "../payment/payment.interface";

export enum IRideStatus {
  requested = "requested",
  accepted = "accepted",
  driver_arrived = "driver_arrived",
  in_progress = "in_progress",
  completed = "completed",
  cancelled = "cancelled",
}

export interface IRide {
  _id?: string;
  riderId: Types.ObjectId;
  driverId?: Types.ObjectId;
  pickupLocation: ILocation;
  destination: ILocation;
  status: IRideStatus;
  estimatedFare: number;
  actualFare?: number;
  distance: number;
  duration: number;
  paymentStatus: TPaymentStatus;
  isPaid: boolean;
  driverRating?: number;
}

export interface ILocation {
  lat: number;
  lng: number;
}
