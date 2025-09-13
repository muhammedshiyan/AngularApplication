declare module 'frappe-gantt' {
  export interface GanttTask {
    id: string;
    name: string;
    start: string;
    end: string;
    progress: number;
    custom_class?: string;
  }

  export interface GanttOptions {
    view_mode?: 'Day' | 'Week' | 'Month';
    on_click?: (task: GanttTask) => void;
    on_date_change?: (task: GanttTask) => void;
  }

  export default class Gantt {
    constructor(element: string | HTMLElement, tasks: GanttTask[], options?: GanttOptions);
  }
}
