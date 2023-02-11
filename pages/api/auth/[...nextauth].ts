import { dbFindOrCreateUser } from '@/common/db-queries';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    } as { clientId: string; clientSecret: string }),
    // ...add more providers here
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ account, profile }: any) {
      console.log('in callback the email is ', profile);
      //   if (account.provider === 'google') {
      //     return profile.email_verified && profile.email.endsWith('@example.com');
      //   }
      try {
        await dbFindOrCreateUser({
          email: profile.email,
          name: profile.name,
          imageUrl: profile.picture,
        });
      } catch (e) {
        console.log(e);
      }

      return true; // Do different verification for other providers that don't have `email_verified`
    },
  },
};
export default NextAuth(authOptions);
