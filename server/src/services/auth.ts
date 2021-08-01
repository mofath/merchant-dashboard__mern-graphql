import { Model } from 'mongoose';
import { Service, Inject } from 'typedi';
import passwordUtils from '../utils/password';
import { IUser, IUserInputDTO, IUserSignupResDTO } from '../types';

@Service()
export default class AuthService {
        constructor(
                @Inject('usersModel') private UsersModel: Model<IUser>,
                @Inject('logger') private Logger,
        ) {
        }

        async signup({ username, password }: IUserInputDTO) {
                try {
                        password = await passwordUtils.hash(password);

                        const existingUser = await this.UsersModel.findOne({ username })

                        if (existingUser)
                                throw new Error('Username already exists')

                        const user = new this.UsersModel({ username, password });
                        await user.save();

                        return {
                                success: true,
                                user: user.toJSON()
                        }
                }
                catch (error) {
                        this.Logger.error('Something went wrong: AuthService: signup:', error);
                        throw error;
                }
        }


        async login({ username, password }: IUserInputDTO) {
                try {
                        const user = await this.UsersModel.findOne({ username })

                        if (!user)
                                throw new Error('User not exist');

                        const passwordMatches = await passwordUtils.compare(password, user.password);                        

                        if (!passwordMatches)
                                throw new Error('Incorrect password');

                        return {
                                success: true,
                                user: user.toJSON()
                        }
                }
                catch (error) {
                        this.Logger.error('Something went wrong: AuthService: login:', error);
                        throw error;
                }
        }
}