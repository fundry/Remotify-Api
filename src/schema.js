import { ApolloServer } from 'apollo-server-express';

import TYPEDEFS from './types.js';
import RESOLVERS from './resolvers.js';
// import Test from '../models/models'

const SERVER = new ApolloServer({
  typeDefs: TYPEDEFS,
  resolvers: RESOLVERS,
  context: ({ req }) => ({}),
});

export default SERVER;
