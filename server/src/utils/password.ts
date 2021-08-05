import bcrypt from 'bcrypt';

var SALT_ROUNDS = 10;

export default {
        hash: (password: string) => bcrypt.hash(password, SALT_ROUNDS),
        compare: (password: string, hash: string) => bcrypt.compare(password, hash),
};