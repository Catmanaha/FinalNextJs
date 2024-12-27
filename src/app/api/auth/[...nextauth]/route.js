import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { findUser } from "@/data/users";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Please provide both email and password.");
                }
                
                const user = findUser(credentials.email, credentials.password);
                
                if (!user) {
                    throw new Error("CredentialsSignin");
                }
                
                return { id: user.email, email: user.email };
            },
        }),
    ],
    pages: {
        signIn: "/auth/login",
    },
    callbacks: {
        async signIn({ user }) {
            if (user) {
                return true;
            }
            return false;
        },
        async redirect({ url, baseUrl }) {
            return baseUrl;
        },
    },
});

export { handler as GET, handler as POST };