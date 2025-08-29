import { Types } from "mongoose";

export interface IRider {
  _id?: string;
  userId: Types.ObjectId;
  emergencyContact?: IEmergencyContact;
  totalRides: number;
}

export interface IEmergencyContact {
  name: string;
  phone: string;
  relationship: string;
}
