export interface TimelineEvent {
   year: number;
   text: string;
}

export interface TimelineCategory {
   id: number;
   title: string;
   startYear: number;
   endYear: number;
   events: TimelineEvent[];
}
