import { type Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from '../types/config';

export const buildWebpackDevServer = (options: BuildOptions): DevServerConfiguration => {
   const { port } = options;
   return {
      open: true,
      hot: true,
      host: '0.0.0.0', 
      allowedHosts: 'all',
      historyApiFallback: true,
      port,
   };
};
