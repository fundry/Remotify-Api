import Axios from 'axios';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

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
    createOrganization: async (root, args, context, info) => {
      const hashedPassword = await bcrypt.hash(args.password, 10);

      return await context.db.mutation.createOrganization({
        data: {
          name: args.name,
          description: args.description,
          // createdAt: new Date(),
          // use moment.js for createdAt
          type: args.type,
          email: args.email,
          country: args.country,
          state: args.state,
          password: hashedPassword,
        },
      });
    },

    loginOrganization: async (
      parent,
      { username, password, where },
      ctx,
      info
    ) => {
      const id = where.id;
      const user = await ctx.db.query.organization({
        where: {
          id: id,
        },
        username,
      });

      if (!user) {
        throw new Error('Invalid Login');
      }
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        throw new Error('Invalid Login');
      }
      const token = jwt.sign(
        {
          id: user.id,
          username: user.email,
        },
        'my-secret-from-env-file-in-prod',
        {
          expiresIn: '30d',  
        }
      );
      return {
        token,
        user,
      };
    },

    createStaff: (root, args, context, info) => {
      return context.db.mutation.createStaff({
        data: {
          name: args.name,
          role: args.role,
          isLead: args.isLead,
          email: args.email,
          country: args.country,
          state: args.state,
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

    // Cloud Functions resolvers here ============>>>>
    verifyEmail: (root, args, context, info) => {
      console.log(args.email);
      const Email = args.email;
      try {
        Axios.post('http://localhost:8080/', {
          email: Email,
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};

export { resolver };
