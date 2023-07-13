import { ApolloServer } from "apollo-server";
import schema from "./schema.js";
import { getUser, protectResolver } from "./users/users.utils.js";
require("dotenv").config();
// Create Server & Run Server

const server = new ApolloServer({
  schema,
  context: async ({ req }) => {
    return {
      loggedInUser: await getUser(req.headers.authorization),
      protectResolver,
    };
  },
});

const PORT = process.env.PORT;

server
  .listen(PORT)
  .then(() => console.log(`🚀 Server is running on http://localhost:${PORT}/`));
