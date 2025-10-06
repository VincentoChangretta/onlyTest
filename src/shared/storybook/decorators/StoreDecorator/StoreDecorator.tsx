import { Decorator } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/storeProvider';

export const StoreDecorator = (initialState?: StateSchema): Decorator => {
   return (Story, context) => (
      <StoreProvider initialState={initialState as StateSchema}>
         <Story {...context} />
      </StoreProvider>
   );
};
