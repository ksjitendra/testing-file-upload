import { UserModel } from "./models/user.model";
export const USER_REPOSITORY = 'USER_REPOSITORY';
export const FILE_REPOSITORY = 'FILE_REPOSITORY';

export const userProviders = [
    {
        provide: USER_REPOSITORY,
        useValue: UserModel
    },
    {
        provide: FILE_REPOSITORY,
        useValue: UserModel
    }
]