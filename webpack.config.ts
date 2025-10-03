import { buildWebpackConfig } from './config/buildWebpackConfig/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/types/config';
import path from 'path';

export default (env: BuildEnv) => {
   const paths: BuildPaths = {
      entry: path.resolve(__dirname, 'src', 'main.tsx'),
      build: path.resolve(__dirname, 'build'),
      html: path.resolve(__dirname, 'index.html'),
      src: path.resolve(__dirname, 'src'),
   };

   const port = env.port || 3000;
   const mode = env.mode || 'development';
   const isDev = mode === 'development';

   const config = buildWebpackConfig({
      paths,
      isDev,
      port,
      mode,
   });

   return config;
};
