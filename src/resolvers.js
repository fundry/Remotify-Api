const resolver = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    
    company: (_, ctx, prisma, info) => {
      const id = ctx.where.id;
      return prisma.db.query.company({
        where: {
          id,
        },
        info,
      });
    },

    staff: (_, ctx, prisma, info) => {
      const id = ctx.where.id;
      return prisma.db.query.staff({
        where: {
          id,
        },
        info,
      });
    },

    team: (_, ctx, prisma, info) => {
      const id = ctx.where.id;
      return prisma.db.query.team({
        where: {
          id,
        },
        info,
      });
    },

    group: (_, ctx, prisma, info) => {
      const id = ctx.where.id;
      return prisma.db.query.group({
        where: {
          id,
        },
        info,
      });
    },
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
