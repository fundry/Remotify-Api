import { makeExecutableSchema } from 'apollo-server';
import { importSchema } from 'graphql-import';
import jwt from 'jsonwebtoken';

import { resolver } from './resolvers.js';

const getUser = (token) => {
  try {
    if (token) {
      return jwt.verify(token, 'my-secret-from-env-file-in-prod');
    }
    return null;
  } catch (err) {
    return null;
  }
};

console.log(process.env.ORGANIZATION_TOKEN)

const typeDefs = importSchema('src/schema.graphql');

const schema = new makeExecutableSchema({
  typeDefs,
  resolvers: resolver,
  context: ({ req }) => {
    const tokenWithBearer = req.headers.authorization || '';
    const token = tokenWithBearer.split(' ')[1];
    const user = getUser(token);

    return {
      user,
      prisma, // the generated prisma client if you are using it
    };
  },
  resolverValidationOptions: { requireResolversForResolveType: false },
});

export { schema };
