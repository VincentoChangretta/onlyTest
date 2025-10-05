import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { HistoricalTimelineType } from '../types/types';
import { TimelineCategory } from '../../config/types/types';
import { timelineCategories } from '../../config/data/categories';

const initialState: HistoricalTimelineType = {
   index: 0,
   historicalTimelineData: timelineCategories,
   currentCategory: timelineCategories[0],
};

export const historicalTimelineSlice = createSlice({
   name: 'historicalTimeline',
   initialState,
   reducers: {
      setCurrentCategory: (state, action: PayloadAction<TimelineCategory>) => {
         state.currentCategory = action.payload;
         state.index = state.historicalTimelineData.findIndex(i => i.id === action.payload.id);
      },
      nextCategory: state => {
         const nextIndex = (state.index + 1) % state.historicalTimelineData.length;
         state.index = nextIndex;
         state.currentCategory = state.historicalTimelineData[nextIndex];
      },
      prevCategory: state => {
         const prevIndex =
            (state.index - 1 + state.historicalTimelineData.length) % state.historicalTimelineData.length;
         state.index = prevIndex;
         state.currentCategory = state.historicalTimelineData[prevIndex];
      },
   },
});

export const { actions: historicalTimelineActions } = historicalTimelineSlice;
export const { reducer: historicalTimelineReducer } = historicalTimelineSlice;
