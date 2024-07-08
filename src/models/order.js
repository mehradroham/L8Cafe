import { model, models, Schema } from "mongoose";

const OrderSchema = new Schema(
  {
    userEmail: String,
    phone: String,
    address: String,
    postalcode: String,
    vahed: String,
    pelak: String,
    cartProducts: Object,
    paid: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export const Order = models?.Order || model("Order", OrderSchema);
