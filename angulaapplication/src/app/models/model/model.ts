// models.ts
export interface ChartDataModel {
  labels: string[];
  datasets: { data: number[]; backgroundColor?: string[]; label?: string }[];
}

export interface GanttTask {
  id: string;
  name: string;
  start: string;
  end: string;
  progress: number;
  custom_class?: string;
}
