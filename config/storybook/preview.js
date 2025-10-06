import '../../src/app/styles/global.scss';
import { StoreDecorator } from 'shared/storybook/decorators/StoreDecorator/StoreDecorator';

const preview = {
   parameters: {
      controls: {
         matchers: {
            color: /(background|color)$/i,
            date: /Date$/i,
         },
      },
   },
   decorators: [StoreDecorator()],
};

export default preview;
