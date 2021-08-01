import { Model } from 'mongoose';
import { Service, Inject } from 'typedi';
import passwordUtils from '../utils/password';
import config from '../config';
import { IUser, IUserInputDTO, IUserSignupResDTO } from '../types';

@Service()
export default class AuthService {
        constructor(
                @Inject('usersModel') private UsersModel: Model<IUser>,
                @Inject('logger') private Logger,
        ) {
        }

        async signup(userInputDTO: IUserInputDTO) {
                try {
                        userInputDTO.password = await passwordUtils.hash(userInputDTO.password);

                        const existingUser = await this.UsersModel.findOne({
                                username: userInputDTO.username
                        })

                        if (existingUser)
                                throw new Error('User with that username already exists')

                        const user = new this.UsersModel(userInputDTO);
                        await user.save();

                        return user.toJSON();
                }
                catch (error) {
                        this.Logger.info('Something went wrong: Service: auth.create', error);
                        throw error;
                }
        }
}