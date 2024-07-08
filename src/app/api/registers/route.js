import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { User } from "../../../models/User";
// import dotenv from "dotenv";

export async function POST(req) {
  const body = await req.json();
  mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const pass = body.password;
  if (!pass?.length || pass.length < 5) {
    new Error("password must be at least 5 characters");
  }

  const notHashedPassword = pass;
  const salt = bcrypt.genSaltSync(10);
  body.password = bcrypt.hashSync(notHashedPassword, salt);
  const createduser = await User.create(body);
  return Response.json(createduser);
}
