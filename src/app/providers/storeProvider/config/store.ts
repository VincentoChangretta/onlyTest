import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { historicalTimelineReducer } from 'entities/historicalTimeline';

export const createReduxStore = (initialState?: StateSchema) => {
   const rootReducers: ReducersMapObject<StateSchema> = {
      historicalTimeline: historicalTimelineReducer,
   };

   return configureStore({
      reducer: rootReducers,
      preloadedState: initialState,
      devTools: true,
      //@ts-ignore
      middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productApi.middleware),
   });
};
