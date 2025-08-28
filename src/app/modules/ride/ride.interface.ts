import { Types } from "mongoose";

export enum IRideStatus {
  requested = "requested",
  accepted = "accepted",
  driver_arrived = "driver_arrived",
  in_progress = "in_progress",
  completed = "completed",
  cancelled = "cancelled",
}

export interface IRide {
  _id: string;
  riderId: Types.ObjectId;
  driverId?: Types.ObjectId;
  pickupLocation: ILocation;
  destination: ILocation;
  status:
    | "requested"
    | "accepted"
    | "driver_arrived"
    | "in_progress"
    | "completed"
    | "cancelled";
  requestedAt: Date;
  acceptedAt?: Date;
  driverArrivedAt?: Date;
  pickedUpAt?: Date;
  completedAt?: Date;
  cancelledAt?: Date;
  cancelledBy?: "rider" | "driver" | "system";
  estimatedFare: number;
  actualFare?: number;
  distance: number; // in kilometers
  duration: number; // in minutes
  paymentMethod: string;
  isPaid: boolean;
  riderRating?: number;
  driverRating?: number;
  route?: ILocation[];
  surgeMultiplier?: number;
}

export interface ILocation {
  lat: number;
  lng: number;
  address?: string;
}

export interface IRideRequest {
  riderId: string;
  pickupLocation: ILocation;
  destination: ILocation;
  paymentMethod: string;
}

export interface IRideEstimate {
  distance: number;
  duration: number;
  fare: number;
  surgeMultiplier?: number;
}
