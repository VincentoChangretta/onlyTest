import { TimelineCategory } from '../../config/types/types';

export interface HistoricalTimelineType {
   index: number;
   historicalTimelineData: TimelineCategory[];
   currentCategory: TimelineCategory;
}
