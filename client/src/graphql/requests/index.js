import { signupMutation } from '../mutations';
import client from '../client';

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