import 'mocha';
import expect from 'expect';
import UserModel from '../../src/models/user';
import AuthService from '../../src/services/auth';
import logger from '../../src/loaders/logger';
import passwordutils from '../../src/utils/password'; '../../src/utils/password'

const authService = new AuthService(UserModel, logger)

export const testUser = {
        username: 'mhmd',
        password: '123',
}

export const notExistUser = {
        username: 'ahmd',
        password: '123',
};

export const userWithInvalidPassword = {
        username: 'mhmd',
        password: '111',
};

describe('Auth Service', () => {

        describe('signup', () => {
                it('Should return the same user info with encrypted password', async () => {
                        const user = await authService.signup(testUser);

                        expect(user).toBeTruthy();
                        expect(user.id).toBeTruthy();
                        expect(user.username).toBe(testUser.username);
                        expect(passwordutils.compare(testUser.password, user.password)).toBeTruthy();
                });

                it('Should throw `Username already exists`', async () => {
                        await expect(authService.signup(testUser)).rejects.toThrow();
                });
        })

        describe('login', () => {
                it('Should return the auth user', async () => {
                        const user = await authService.login(testUser)

                        expect(user).toBeTruthy();
                        expect(user.id).toBeTruthy();
                        expect(user.username).toBe(testUser.username);
                });

                it('Should throw `User not exist`', async () => {
                         await expect(authService.login(notExistUser)).rejects.toThrow();
                });

                it('Should throw `Incrocet password`', async () => {
                        await expect(authService.login(userWithInvalidPassword)).rejects.toThrow();
               });
        })

})
