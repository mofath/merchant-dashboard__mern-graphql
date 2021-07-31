import { Container } from 'typedi';
import LoggerInstance from './logger';
import { DependencyInjectorLoaderProps } from '../types';

const dependencyInjectorLoader = async ({ mongoConnection, models }: DependencyInjectorLoaderProps) => {
  try {
    models.forEach(m => {
      Container.set(m.name, m.model);
    });

    Container.set('mongoConnection', mongoConnection);
    Container.set('logger', LoggerInstance);
  } catch (error) {
    LoggerInstance.error('🔥 Error on dependency injector loader: %o', error);
    throw error;
  }
};

export default dependencyInjectorLoader;
