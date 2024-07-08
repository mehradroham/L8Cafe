import { Schema, models, model } from "mongoose";

const UserInfoSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    
    postalcode: {
      type: String,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    vahed: {
      type: String,
    },
    pelak: {
      type: String,
    },
    admin: { type: Boolean, default: false },
  },
  { Timestamps: true },
);

export const UserInfo = models?.UserInfo || model("UserInfo", UserInfoSchema);
