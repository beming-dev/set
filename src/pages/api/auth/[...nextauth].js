import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../db/config";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 3 * 24 * 60 * 60, // 3 days
  },
  callbacks: {
    async jwt({ token }) {
      // 로그인 시 `user` 객체가 존재하면 `token`에 사용자 고유 ID를 추가
      return token;
    },
    async session({ session, token }) {
      // `token` 객체에 id가 존재하면 세션 객체에 추가
      if (token && token.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
});
