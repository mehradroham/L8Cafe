import { model, models, Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: { type: String },
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
    },
    image: { type: String },
  },
  { timestamps: true },
);

export const User = models?.User || model("User", userSchema);
