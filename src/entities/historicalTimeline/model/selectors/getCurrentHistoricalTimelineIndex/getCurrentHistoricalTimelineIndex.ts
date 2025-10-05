import { StateSchema } from 'app/providers/storeProvider';

export const getCurrentHistoricalTimelineIndex = (state: StateSchema) => state.historicalTimeline.index;
