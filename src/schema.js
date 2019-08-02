import { makeExecutableSchema } from 'apollo-server';
import { importSchema } from 'graphql-import';

// import typeDefs from './types.js';
import { resolver } from './resolvers.js';

const typeDefs = importSchema('src/schema.graphql');

const schema = new makeExecutableSchema({
  typeDefs,
  resolvers: resolver,
  resolverValidationOptions: { requireResolversForResolveType: false },
});

export { schema };
