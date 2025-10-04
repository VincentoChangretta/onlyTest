import type { StateSchema } from 'app/providers/storeProvider';

export const getCurrentHistoricalTimeline = (state: StateSchema) => state.historicalTimeline.currentCategory;
