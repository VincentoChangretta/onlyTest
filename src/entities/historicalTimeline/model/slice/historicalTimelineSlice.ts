import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { HistoricalTimelineType } from '../types/types';
import { TimelineCategory } from '../../config/types/types';

const initialState: HistoricalTimelineType = {
   currentCategory: null,
};

export const historicalTimelineSlice = createSlice({
   name: 'historicalTimeline',
   initialState,
   reducers: {
      setCurrentCategory: (state, action: PayloadAction<TimelineCategory>) => {
         state.currentCategory = action.payload;
      },
   },
});

export const { actions: historicalTimelineActions } = historicalTimelineSlice;
export const { reducer: historicalTimelineReducer } = historicalTimelineSlice;
