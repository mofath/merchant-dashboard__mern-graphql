import { Resolvers } from '../generated/types';

const resolvers: Resolvers = {
	Mutation: {
	},
	Query: {
		test: () => 'hello'
	},
}

export default resolvers
