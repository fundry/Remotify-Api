require('dotenv').config();
import { ApolloServer } from 'apollo-server';
import { Prisma } from 'prisma-binding';
import { schema } from './src/schema';

const server = new ApolloServer({
  introspection: true,
  schema,
  context: (req) => ({
    ...req,
    db: new Prisma({
      typeDefs: './prisma/prisma.graphql',
      endpoint: process.env.PRISMA_URL,
      debug: true,
    }),
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
