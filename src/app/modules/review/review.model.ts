import { model, Schema } from "mongoose";
import { IReview } from "./review.interface";

const reviewSchema = new Schema<IReview>({
  rideId: { type: Schema.Types.ObjectId, ref: "Ride", required: true },
  riderId: { type: Schema.Types.ObjectId, ref: "Rider", required: true },
  driverId: { type: Schema.Types.ObjectId, ref: "Driver", required: true },
  rating: { type: Number, min: 1, max: 5 },
  comment: { type: String },
});

export const Review = model<IReview>("Review", reviewSchema);
