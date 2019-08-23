const resolver = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    // users: (root, args, context, info) => {
    //   return context.prisma.query.users({}, info);
    // },
    company: () => `company resolver`,
    staff: () => `staff resolve `,

    team: (ctx, prisma, info) => {
      const id = ctx.where.id;
      return prisma.db.query.team({
        where: {
          id,
        },
        info,
      });
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
