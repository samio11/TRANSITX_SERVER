import { model, Schema } from "mongoose";
import { IAdmin } from "./admin.interface";

const adminSchema = new Schema<IAdmin>(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Admin = model<IAdmin>("Admin", adminSchema);
