import { connect, Document } from 'mongoose';

type ThenArg<T> = T extends PromiseLike<infer U> ? U : T

type DependencyInjectorLoaderProps = {
        mongoConnection: ThenArg<ReturnType<typeof connect>>
        models: { name: string; model: any }[]
}

interface IUser extends Document {
        id: string;
        usetname: string;
        password?: string;
}


