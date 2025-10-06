import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';
import { BuildOptions } from '../types/config';
import path from 'path';
import { buildScssLoader } from '../loaders/buildScssLoader';

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
   const { isDev } = options;
   const tsLoader: RuleSetRule = {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
   };

   const cssLoader: RuleSetRule = {
      test: /\.css$/i,
      use: [
         isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
         {
            loader: 'css-loader',
            options: {
               importLoaders: 1,
            },
         },
      ],
   };

   const scssLoader = buildScssLoader({ isDev });

   return [tsLoader, cssLoader, scssLoader];
};
