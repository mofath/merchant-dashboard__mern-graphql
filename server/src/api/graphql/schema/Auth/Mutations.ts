import { Container } from 'typedi'
import AuthService from '../../../../services/auth'
import { MutationResolvers } from '../../generated/types'

export const signup: MutationResolvers['signup'] = async (
	parent,
	{ username, password },
) => {
	const authServiceInstance = Container.get(AuthService)
	const user = await authServiceInstance.signup({ username, password });

	return {
                user:{
                     id: user.id,
                     username: user.username,  
                },
                isAuthenticated: true
	}
}
