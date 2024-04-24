import { loginService } from "@/service/auth.service";
import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOption = {
    providers: [
        CredentialsProvider({
            async authorize(userInput) {
                // console.log("userInput ", userInput)
                const newUserInput = {
                    email: userInput.email,
                    password: userInput.password
                };
                const login = await loginService(newUserInput);
                return login;
            },
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },
        async session({ session, token }) {
            session.user = token;
            return session;
        },
        // secret: process.env.NEXTAUTH_SECRET,
        // session: { strategy: "jwt" },
        // pages: { signIn: "/darshboard" },
    }
  
}
const handler = nextAuth(authOption);
export { handler as GET, handler as POST };