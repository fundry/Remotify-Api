const resolver = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    // users: (root, args, context, info) => {
    //   return context.prisma.query.users({}, info);
    // },
    company: () => `company resolver`,
    staff: () => `staff resolve `,
    team: (root, ctx, prisma, parent) => {
      // console.log(prisma.db.query)
      return prisma.db.query.team({});
    },
    group: () => `group resolver`,
  },
  Mutation: {
    createCompany: (root, args, context, info) => {
      return context.db.mutation.createCompany({
        data: {
          name: args.name,
        },
      });
    },

    createStaff: (root, args, context, info) => {
      return context.db.mutation.createStaff({
        data: {
          name: args.name,
          role: args.role,
        },
      });
    },

    createTeam: (root, args, context, info) => {
      return context.db.mutation.createTeam({
        data: {
          name: args.name,
          members: args.members,
          description: args.description,
          active: args.active,
        },
      });
    },

    createGroup: (root, args, context, info) => {
      return context.db.mutation.createGroup({
        data: {
          name: args.name,
          description: args.description,
        },
      });
    },
  },
};

export { resolver };
