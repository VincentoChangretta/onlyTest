import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';
import { BuildOptions } from '../types/config';

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
   const { isDev } = options;
   const tsLoader = {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
   };

   const scssLoader: RuleSetRule = {
      test: /\.s[ac]ss$/i,
      use: [
         isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
         {
            loader: 'css-loader',
            options: {
               url: false,
               modules: {
                  auto: /\.module\./,
                  localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:5]',
                  exportLocalsConvention: 'asIs',
                  namedExport: false,
               },
            },
         },
         'sass-loader',
      ],
   };

   return [tsLoader, scssLoader];
};
