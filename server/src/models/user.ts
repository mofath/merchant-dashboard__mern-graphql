import { IUser } from '../types';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
        {
                username: {
                        type: String,
                        required: [true, 'Name is required'],
                        index: true,
                },

                password: {
                        type: String,
                }
        },
        { timestamps: true },
);

userSchema.methods.toJSON = function (): any {
        const userObject = this.toObject()
        userObject.id = userObject._id
        delete userObject['__v']
        delete userObject['password']
        return userObject
}


export default mongoose.model<IUser>('User', userSchema);
