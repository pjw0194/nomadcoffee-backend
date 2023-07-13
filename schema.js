import path from "path";
import { loadFilesSync } from "@graphql-tools/load-files";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";

const loadedTypes = loadFilesSync(path.join(__dirname, "./**/*.typeDefs.js"));
const loadedResolvers = loadFilesSync(
  path.join(__dirname, "./**/*.resolvers.js")
);
const typeDefs = mergeTypeDefs(loadedTypes);
const resolvers = mergeResolvers(loadedResolvers);

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
