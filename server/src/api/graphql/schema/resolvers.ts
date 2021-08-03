import {  AuthMutations, AuthQueries } from './Auth'
import { Resolvers } from '../generated/types'

const resolvers: Resolvers = {
	Query: {
		...AuthQueries,
	},
	Mutation: {
		...AuthMutations,
	},
}

export default resolvers