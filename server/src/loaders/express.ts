import express, { Application } from 'express';
import { Server } from 'http';
import { apolloServer } from '../api/graphql/apolloServer';
import { 
  ErrorHandlerMiddleware, 
  NotFoundErrorMiddleWare, 
  CORSMiddleware 
} from '../api/middlewares';

type Props = { app: Application; server: Server }
const expressLoader = async ({ app, server }: Props) => {

  app.use(express.json());

  app.use(CORSMiddleware);

  // GraphQL API
  apolloServer(app, server)

  /// error handlers
  app.use(NotFoundErrorMiddleWare);

  app.use(ErrorHandlerMiddleware);
};

export default expressLoader;
