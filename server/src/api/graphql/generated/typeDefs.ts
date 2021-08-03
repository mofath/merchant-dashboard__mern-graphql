// Do not edit directly!
export default `
type AuthData {
  user: User!
  isAuthenticated: Boolean!
}

type Mutation {
  signup(username: String!, password: String!): AuthData
}

type Query {
  login(username: String!, password: String!): AuthData
}

type User {
  id: ID!
  username: String
}

`