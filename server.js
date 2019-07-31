require('dotenv').config();
import { ApolloServer, gql } from 'apollo-server';
import { Prisma } from 'prisma-binding';
import {schema} from "./src/schema";

const server = new ApolloServer({
  schema , 
  context: (req) => ({
    ...req,
    prisma: new Prisma({
      typeDefs: './prisma/prisma.graphql',
      endpoint: process.env.PRISMA_URL,
      debug: true,
    }),
  }),
});

server
  .listen()
  .then(({ url }) => {
    console.log(`💩  is running at ${url}`);
  })
  .catch((e) => console.log(e));
