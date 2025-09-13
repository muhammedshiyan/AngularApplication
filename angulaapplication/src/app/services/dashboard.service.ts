// dashboard.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChartDataModel , GanttTask } from '../models/model/model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = 'https://localhost:5001/api/dashboard';

  constructor(private http: HttpClient) {}

  getPieChartData(): Observable<ChartDataModel> {
    return this.http.get<ChartDataModel>(`${this.apiUrl}/pie`);
  }

  getBarChartData(): Observable<ChartDataModel> {
    return this.http.get<ChartDataModel>(`${this.apiUrl}/bar`);
  }

  getGanttTasks(): Observable<GanttTask[]> {
    return this.http.get<GanttTask[]>(`${this.apiUrl}/gantt`);
  }
}
