import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";

const options = {
  clientId: process.env.GOOGLE_ID,
  clientSecret: process.env.GOOGLE_SECRET,
  authorization: {
    params: {
      prompt: "consent",
      access_type: "offline",
      response_type: "code",
    },
  },
};

export const authOptions = {
  providers: [GoogleProvider(options)],
  secret: process.env.JWT_SECRET,
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    session: async (session, user) => {
      return Promise.resolve(session);
    },
  },
};

export default NextAuth(authOptions);
