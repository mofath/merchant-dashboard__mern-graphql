import { Container } from 'typedi'
import AuthService from '../../../../services/auth'
import { QueryResolvers } from '../../generated/types'

export const login: QueryResolvers['login'] = async (
        parent,
        { username, password },
) => {
        const authServiceInstance = Container.get(AuthService)
        const user = await authServiceInstance.login({ username, password })

        return {
                user: {
                        id: user.id,
                        username: user.username,
                },
                isAuthenticated: true
        }
}