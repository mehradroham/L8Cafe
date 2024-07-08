import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOption } from "./../authoption/AuthOption";
import { User } from "../../../models/User";
import { UserInfo } from "../../../models/UserInfo";

export async function PUT(req) {
  mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URL);
  const data = await req.json();
  const { _id, username, image, ...otherUserInfo } = data;

  let filter = {};
  if (_id) {
    filter = { _id };
  } else {
    const session = await getServerSession(authOption);
    //   console.log({ session, data });
    const email = session.user.email;
    //   const userName = data.name;
    filter = { email };
  }

  const user = await User.findOne(filter);
  await User.updateOne(filter, { username, image });
  await UserInfo.findOneAndUpdate({ email: user.email }, otherUserInfo, {
    upsert: true,
  });

  return Response.json(true);
}

export async function GET(req) {
  mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URL);

  const url = new URL(req.url);
  const _id = url.searchParams.get("_id");

  let filterUser = {};
  if (_id) {
    filterUser = { _id };
  } else {
    const session = await getServerSession(authOption);
    const email = session?.user?.email;
    if (!email) {
      return Response.json({});
    }
    filterUser = { email };
  }

  const user = await User.findOne(filterUser).lean();
  const userInfo = await UserInfo.findOne({ email: user.email }).lean();

  return Response.json({ ...user, ...userInfo });
}
