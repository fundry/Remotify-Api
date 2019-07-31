require('dotenv').config();
import { ApolloServer, gql } from 'apollo-server';
import { importSchema } from 'graphql-import';
import { Prisma } from 'prisma-binding';
 
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    users: (root, args, context, info) => {
      return context.prisma.query.users({}, info);
    },
    node(root, { id }, ctx, info) {
      return ctx.prisma.query.node({ id }, info);
    },
  },
  Mutation: {
    createUser: (root, args, context, info) => {
      return context.prisma.mutation.createUser(
        {
          data: {
            firstName: args.firstName,
            lastName: args.lastName,
            email: args.email,
            password: args.password,
          },
        },
        info
      );
    },
  },
  Node: {
    __resolveType(obj, ctx, info) {
      return obj.__typename;
    },
  },
};

const typeDefs = importSchema('src/schema.graphql');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
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
