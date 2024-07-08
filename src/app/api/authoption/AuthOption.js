

import mongoose from "mongoose";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "./../../../models/User";
import bcrypt from "bcrypt";
import { UserInfo } from "./../../../models/UserInfo";
import  { getServerSession } from "next-auth/next";

export const authOption = {
    secret: process.env.NEXT_PUBLIC_SECRET,
    // adapter: MongoDBAdapter(clientpromise),
    providers: [
      // GoogleProvider({
      //   clientId: process.env.GOOGLE_CLIENT_ID,
      //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      // }),
      CredentialsProvider({
        name: "Credentials",
        id: "credentials",
        credentials: {
          username: {
            label: "Username",
            type: "text",
            placeholder: "test@example.com",
          },
          password: {
            label: "Password",
            type: "password",
          },
        },
  
        async authorize(credentials, req) {
          const email = credentials?.email;
  
          const password = credentials?.password;
          mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URL);
          const user = await User.findOne({ email });
  
          const passwordOk = user && bcrypt.compareSync(password, user.password);
  
          if (passwordOk) {
            return user;
          }
          return null;
        },
      }),
    ],
  };

  

// import GoogleProvider from "next-auth/providers/google";
// import { MongoDBAdapter } from "@auth/mongodb-adapter";
// import clientpromise from "../../../../libs/mongoConnect";

export async function isAdmin() {
  const session = await getServerSession(authOption);
  const userEmail = session?.user?.email;
  if (!userEmail) {
    return false;
  }
  const userInfo = await UserInfo.findOne({ email: userEmail });
  if (!userInfo) {
    return false;
  }
  return userInfo.admin;
}
  