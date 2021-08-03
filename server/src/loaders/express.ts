import express, {Application } from 'express';
import { Server } from 'http';
import { ErrorHandlerMiddleware, NotFoundErrorMiddleWare } from '../api/middlewares/error';

type Props = { app: Application; server: Server }
const expressLoader = async ({ app, server }: Props) => { 

  app.use(express.json());

  /// error handlers
  app.use(NotFoundErrorMiddleWare);

  app.use(ErrorHandlerMiddleware);
};

export default expressLoader;
