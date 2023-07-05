import { gql } from "apollo-server";

export default gql`
  type User {
    id: Int
    username: String
    email: String
    name: String
    location: String
    password: String
    avatarURL: String
    githubUsername: String
  }
  type Query {
    getUser(id: Int!): User
    getAllUsers: [User]
  }
  type Mutation {
    createAccount(
      username: String!
      email: String!
      name: String!
      location: String!
      password: String!
      avatarURL: String
      githubUsername: String
    ): CreateAccountResponse!
  }
  type CreateAccountResponse {
    ok: Boolean!
    error: String
  }
`;
