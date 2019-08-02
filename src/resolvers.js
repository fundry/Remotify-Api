const resolver = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    // users: (root, args, context, info) => {
    //   return context.prisma.query.users({}, info);
    // },
    team: (root, ctx, prisma, parent,) => {
        // console.log(prisma.db.query)      
      return prisma.db.query.team({});
    },
    staff: () => `staff resolve `,
    company: () => `company resolver`,
  },
  Mutation: {
    createTeam: (root, args, context, info) => {
      return context.db.mutation.createTeam({
        data: {
          name: args.name,
          members: args.members,
          description: args.description,
          active: args.active,
        },
      });
      // console.log(context.prisma.mutation)
    },
  },
};

export { resolver };
