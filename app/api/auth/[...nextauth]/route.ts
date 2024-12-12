import NextAuth, { NextAuthOptions } from "next-auth";
import { Account, User as AuthUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import prisma from "@/utils/db";
import { nanoid } from "nanoid";

// Correctly type the authOptions object
// @ts-ignore
export const authOptions: NextAuthOptions = {
  providers: [
    // @ts-ignore
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing email or password");
        }

        try {
          const user = await prisma.user.findFirst({
            where: { email: credentials.email },
          });

          if (!user) {
            throw new Error("No user found");
          }

          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password || ""
          );

          if (!isPasswordCorrect) {
            throw new Error("Invalid credentials");
          }

          return {
            id: user.id,
            email: user.email,
            role: user.role, // Ensure this exists in your schema
          };
        } catch (err: any) {
          throw new Error(err.message || "Authorization failed");
        }
      },
    }),
  ],
  callbacks: {
    // @ts-ignore
    async signIn({ user, account }: { user: AuthUser; account: Account }) {
      if (account?.provider === "credentials") {
        return true;
      }
      return false;
    },
  },
};

// @ts-ignore
export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
