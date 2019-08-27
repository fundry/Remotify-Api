const resolver = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    
    organization: (_, ctx, prisma, info) => {
      const id = ctx.where.id;
      return prisma.db.query.organization({
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
    createOrganization: (root, args, context, info) => {
      return context.db.mutation.createOrganization({
        data: {
          name: args.name,
          description: args.description , 
          // createdAt: new Date(),
          // use moment.js for createdAt
          type: args.type
        },
      });
    },

    createStaff: (root, args, context, info) => {
      return context.db.mutation.createStaff({
        data: {
          name: args.name,
          role: args.role,
          isLead: args.isLead
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
