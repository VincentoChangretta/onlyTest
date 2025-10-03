import { Configuration } from 'webpack';
import path from 'path';
import { buildLoaders } from '../buildLoaders/buildLoaders';
import { buildResolvers } from '../buildResolvers/buildResolvers';
import { buildPlugins } from '../buildPlugins/buildPlugins';
import { buildWebpackDevServer } from '../buildWebpackDevServer/buildWebpackDevServer';
import { BuildOptions } from '../types/config';

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
   const { paths, isDev, mode } = options;
   return {
      mode,
      entry: paths.entry,
      module: {
         rules: buildLoaders(options),
      },
      output: {
         filename: '[name].[contenthash].js',
         path: paths.build,
         clean: true,
      },
      resolve: buildResolvers(options),
      plugins: buildPlugins(options),
      devtool: isDev ? 'inline-source-map' : undefined,
      devServer: buildWebpackDevServer(options),
   };
};
