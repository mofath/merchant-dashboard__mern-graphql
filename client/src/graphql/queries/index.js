import gql from 'graphql-tag';

export const loginQuery = gql`
  query LoginQuery($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      user {
        id
        username
      }
      isAuthenticated
  }
}
`;