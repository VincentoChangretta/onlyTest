import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type { RuleSetRule } from 'webpack';

interface BuildScssLoaderOptions {
   isDev: boolean;
}

export const buildScssLoader = (props: BuildScssLoaderOptions): RuleSetRule => {
   const { isDev } = props;
   return {
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
         {
            loader: 'sass-loader',
            options: {
               additionalData: (content: string, loaderContext: any) => {
                  if (loaderContext.resourcePath.includes('variables.scss')) {
                     return content;
                  }

                  return `@use "app/styles/variables/variables" as *;\n${content}`;
               },
               sassOptions: {
                  includePaths: [path.resolve(__dirname, '..', '..', '..', 'src')],
               },
            },
         },
      ],
   };
};
