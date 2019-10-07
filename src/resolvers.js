require('dotenv').config();
//dotenv should be topmost so it loads all  env data
import Axios from 'axios';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const resolver = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,

    organization: async (_, ctx, prisma, info) => {
      // logic to  create protected field ===========-->>

      // if (!name) {
      //   throw new Error('Invalid Login');
      // }

      const id = ctx.where.id;
      const email = ctx.where.email;
      return prisma.db.query.organization({
        where: {
          email,
        },
        info,
      });
    },

    staff: (_, ctx, prisma, info) => {
      const email = ctx.where.email;
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
      const email = ctx.where.email;
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
    // ===================>
    createOrganization: async (root, args, context, info) => {
      const hashedPassword = await bcrypt.hash(args.password, 10);

      // cloud function here
      const Email = args.email;
      try {
        Axios.post('http://localhost:8080/', {
          email: Email,
        });
      } catch (error) {
        console.log(error);
      }

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

    loginOrganization: async (_, { password, where }, ctx, info) => {
      const email = where.email;
      const user = await ctx.db.query.organization({
        where: {
          email: email,
        },
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
          username: email,
        },
        process.env.APP_SECRET,
        {
          expiresIn: '30d',
        }
      );
      return { token, user };
    },

    createStaff: async (_, args, context, info) => {
      const hashedPassword = await bcrypt.hash(args.password, 10);

      // cloud function here
      const Email = args.email;
      try {
        Axios.post('http://localhost:8080/', {
          email: Email,
        });
      } catch (error) {
        console.log(error);
      }

      return context.db.mutation.createStaff({
        data: {
          name: args.name,
          role: args.role,
          isLead: args.isLead,
          email: args.email,
          country: args.country,
          state: args.state,
          password: hashedPassword,
        },
      });
    },

    createTeam: (_, args, context, info) => {
      return context.db.mutation.createTeam({
        data: {
          name: args.name,
          members: args.members,
          description: args.description,
          active: args.active,
        },
      });
    },

    createGroup: async (_, args, context, info) => {
      const hashedPassword = await bcrypt.hash(args.password, 10);

      // cloud function here
      const Email = args.email;
      try {
        Axios.post('http://localhost:8080/', {
          email: Email,
        });
      } catch (error) {
        console.log(error);
      }
      return context.db.mutation.createGroup({
        data: {
          name: args.name,
          description: args.description,
          email: args.email,
          password: hashedPassword,
        },
      });
    },

    // Cloud Functions resolvers here ============>>>>
    sendEmail: (root, args, context, info) => {
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
