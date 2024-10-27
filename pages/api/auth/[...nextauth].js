import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
    providers: [
        GithubProvider({
            clientId: 'Ov23liMdh5k3sdKXfY1d', 
            clientSecret: '48a67ee2b7c48600461a98ad96cbbc9a62926ec1'
        }),
    ],
});