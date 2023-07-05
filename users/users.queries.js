import client from "../client.js";

export default {
  Query: {
    getUser: async (_, { id }) => {
      return await client.user.findUnique({ where: { id } });
    },
    getAllUsers: async () => {
      return await client.user.findMany();
    },
  },
};
