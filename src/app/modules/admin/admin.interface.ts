import { Types } from "mongoose";

export interface IAdmin {
  _id: string;
  userId: Types.ObjectId;
}
