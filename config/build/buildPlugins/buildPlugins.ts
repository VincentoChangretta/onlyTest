import HtmlWebpackPlugin from 'html-webpack-plugin';
import { ProgressPlugin, WebpackPluginInstance } from 'webpack';
import { BuildOptions } from '../types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildPlugins = (options: BuildOptions): WebpackPluginInstance[] => {
   const { paths } = options;
   return [
      new HtmlWebpackPlugin({
         filename: 'index.html',
         template: paths.html,
      }),
      new ProgressPlugin(),
      new MiniCssExtractPlugin(),
   ];
};
