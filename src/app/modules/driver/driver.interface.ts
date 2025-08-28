import { Types } from "mongoose";

export interface IDriver {
  _id: string;
  userId: Types.ObjectId;
  vehicle: IVehicle;
  licenseNumber: string;
  isOnline: boolean;
  isAvailable: boolean;
  rating?: number;
  totalTrips: number;
  totalEarnings: number;
  approved: boolean;
}

export interface IVehicle {
  make: string;
  model: string;
  year: number;
  color: string;
  licensePlate: string;
  capacity: number;
  vehicleType: "car" | "bike" | "suv";
}
