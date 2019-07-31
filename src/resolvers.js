const resolver = {
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


export  {resolver}  