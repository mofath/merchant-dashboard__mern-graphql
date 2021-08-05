import { signupMutation } from '../mutations';
import { loginQuery } from '../queries';
import GraphqlClient from '../client';

const client = GraphqlClient.getInstance();

export const signup = async (username, password) => {
        try {
                await client.mutate({
                        mutation: signupMutation,
                        variables: {
                                username,
                                password
                        },
                });
        } catch (error) {
                alert(error.message.split(':').pop());
        }
};


export const login = async (username, password) => {
        try {
                const { data } = await client.query({
                        query: loginQuery,
                        variables: {
                                username,
                                password
                        },
                });
                return data.login;
        } catch (error) {
                alert(error.message.split(':').pop());
        }
};