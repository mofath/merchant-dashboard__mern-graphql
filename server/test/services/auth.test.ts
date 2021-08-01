import 'mocha';
import expect from 'expect';
import UserModel from '../../src/models/user';
import AuthService from '../../src/services/auth';
import logger from '../../src/loaders/logger';
import passwordutils  from '../../src/utils/password';'../../src/utils/password'

const authService = new AuthService(UserModel, logger)

export const testUser = {
        username: 'mofath',
        password: '123456',
}

describe('Auth Service', () => {

        describe('signup', () => {
                it('Should return the same info with encrypted password', async () => {
                        const user = await authService.signup(testUser);
                
                        expect(user).toBeTruthy();
                        expect(user.id).toBeTruthy()
                        expect(user.username).toBe(testUser.username)

                        const hashedPassword = passwordutils.hash(testUser.password);

                        expect(passwordutils.compare(hashedPassword, testUser.password!)).toBeTruthy()
                })

                it('Should throw when there is existing user with the same username', async () => {
                        await expect(authService.signup(testUser)).rejects.toThrow()
                });
        })
})
