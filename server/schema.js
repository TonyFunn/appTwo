const {buildSchema} = require('graphql')

const schema = buildSchema(`
  type User {
    id: ID
    username: String
    age: Int
    posts: [Post]
  }
  type Post {
    id: ID
    title: String
    contant: String
  }

  input UserInput {
    id: ID
    username: String!
    age: Int!
    posts: [PostInput]
  }
  input PostInput {
    id: ID
    title: String!
    contant: String!
  }

  type Query {
    getAllUsers: [User]
    getUser(id: ID): User
  }

  type Mutation {
    createUser(input: UserInput): User
  }
`)

module.exports = schema