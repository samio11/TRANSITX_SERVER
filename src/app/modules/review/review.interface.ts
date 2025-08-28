import { Types } from "mongoose";

export interface IReview {
  _id: string;
  rideId: Types.ObjectId;
  riderId: Types.ObjectId;
  driverId: Types.ObjectId;
  rating: number; // 1-5
  comment?: string;
}
