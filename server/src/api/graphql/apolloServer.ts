import { ApolloServer } from 'apollo-server-express';
import { Application } from 'express';
import { Server } from 'http';
import config from '../../config';
import logger from '../../loaders/logger';
import { getSchema } from './schema';


export const apolloServer = (app: Application, server: Server) => {

	const apolloServer = new ApolloServer({
		context: async ({ req }) => req,
		schema: getSchema(),
	})

	apolloServer.applyMiddleware({
		app,
		cors: false,
	})

	server.on('listening', () => {
		logger.info(`🛰️ graphql ws://localhost:${config.port + apolloServer.graphqlPath}`)
	})
}
