import { StateSchema } from 'app/providers/storeProvider';

export const getHistoricalTimelineData = (state: StateSchema) =>
   state.historicalTimeline.historicalTimelineData;
