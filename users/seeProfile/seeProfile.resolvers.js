import client from "../../client.js";

export default {
  Query: {
    seeProfile: async (_, { username }) => {
      return await client.user.findUnique({ where: { username } });
    },
    getAllUsers: async () => {
      return await client.user.findMany();
    },
  },
};
