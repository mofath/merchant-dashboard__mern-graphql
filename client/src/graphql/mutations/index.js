import gql from 'graphql-tag';

export const signupMutation = gql`
  mutation SignupMutation($username: String!, $password: String!) {
    signup(username: $username, password: $password) {
      user {
        id
        username
    }   
  }
}
`;