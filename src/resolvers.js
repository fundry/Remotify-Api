const RESOLVERS = {
  Query: {
    test: async (parent, args, { Test }) => {
      const tests = await Test.find();

      return tests.map((test) => {
        return test;
      });
    },
  },

  Mutation: {
    // addtest: async (parent, args, { Test }) => {
    //   const test = await new Test(args).save();
    //   test._id = test._id.toString();
    //   return test;
    // },
  },
};

export default RESOLVERS;
