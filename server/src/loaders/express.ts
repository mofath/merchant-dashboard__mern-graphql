import express, {Application } from 'express';
import { Server } from 'http';
import { ErrorHandlerMiddleware, NotFoundErrorMiddleWare } from '../api/middlewares/error';
import { apolloServer } from '../api/graphql/apolloServer'

type Props = { app: Application; server: Server }
const expressLoader = async ({ app, server }: Props) => { 

  app.use(express.json());

  	// GraphQL API
	apolloServer(app, server)

  /// error handlers
  app.use(NotFoundErrorMiddleWare);

  app.use(ErrorHandlerMiddleware);
};

export default expressLoader;
