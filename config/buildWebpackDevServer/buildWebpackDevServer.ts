import { type Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from '../types/config';

export const buildWebpackDevServer = (options: BuildOptions): DevServerConfiguration => {
   const { port } = options;
   return {
      open: true,
      historyApiFallback: true,
      port,
   };
};
