import { model, Schema } from "mongoose";
import { IUser, IUserRole } from "./user.interface";
import bcrypt from "bcrypt";
import config from "../../config";

const userSchema = new Schema<IUser>(
  {
    email: { type: String, unique: true, required: true },
    password: { type: String, unique: true, required: true },
    role: {
      type: String,
      enum: {
        values: Object.values(IUserRole),
        message: "{VALUE} is not valid Role",
      },
      default: IUserRole.rider,
    },
    name: { type: String, required: true },
    phone: { type: String, unique: true, required: true },
    profileImage: { type: String },
    isActive: { type: Boolean, default: true },
    isBlocked: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, Number(config.bcrypt_salt));
  next();
});

userSchema.post("save", async function (doc, next) {
  doc.password = "";
  next();
});

export const User = model<IUser>("User", userSchema);
