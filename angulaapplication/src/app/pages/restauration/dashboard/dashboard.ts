import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart, { ChartConfiguration, ChartData } from 'chart.js/auto';
import Gantt, { GanttTask, GanttOptions } from 'frappe-gantt';
import { DashboardService } from '../../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard implements AfterViewInit {

  @ViewChild('pieCanvas') pieCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('barCanvas') barCanvas!: ElementRef<HTMLCanvasElement>;
 // @ViewChild('ganttContainer', { static: true }) ganttContainer!: ElementRef;
 @ViewChild('ganttContainer', { static: false }) ganttContainer!: ElementRef;
  ganttTasks: GanttTask[] = [];
  ganttOptions: GanttOptions = {
    view_mode: 'Week',
    on_click: task => console.log('Task clicked', task),
    on_date_change: task => console.log('Task updated', task),
  };

  constructor(private dashboardService: DashboardService) {}

  // ngAfterViewInit(): void {
  //   // Pie Chart
  //   this.dashboardService.getPieChartData().subscribe(data => {
  //     new Chart(this.pieCanvas.nativeElement, {
  //       type: 'pie',
  //       data,
  //       options: { responsive: true }
  //     } as ChartConfiguration);
  //   });

  //   // Bar Chart
  //   this.dashboardService.getBarChartData().subscribe(data => {
  //     new Chart(this.barCanvas.nativeElement, {
  //       type: 'bar',
  //       data,
  //       options: { responsive: true }
  //     } as ChartConfiguration);
  //   });

  //   // Gantt Chart
  //   this.dashboardService.getGanttTasks().subscribe(tasks => {
  //     this.ganttTasks = tasks;
  //     new Gantt(this.ganttContainer.nativeElement, this.ganttTasks, this.ganttOptions);
  //   });
  // }

  ngAfterViewInit(): void {

    // --- PIE CHART ---
    this.dashboardService.getPieChartData().subscribe({
      next: data => this.createPieChart(data || this.getStaticPieData()),
      error: () => this.createPieChart(this.getStaticPieData())
    });

    // --- BAR CHART ---
    this.dashboardService.getBarChartData().subscribe({
      next: data => this.createBarChart(data || this.getStaticBarData()),
      error: () => this.createBarChart(this.getStaticBarData())
    });

    //--- GANTT CHART ---
    this.dashboardService.getGanttTasks().subscribe({
      next: tasks => this.createGanttChart(tasks || this.getStaticGanttTasks()),
      error: () => this.createGanttChart(this.getStaticGanttTasks())
    });

    //   setTimeout(() => {
    //   const tasks: GanttTask[] = this.getGanttTasks();
    //   new Gantt(this.ganttContainer.nativeElement, tasks, this.getGanttOptions());
    // }, 0);
  }
  // private getGanttTasks(): GanttTask[] {
  //   // Replace with service call; fallback to static data
  //   return [
  //     { id: '1', name: 'Design', start: '2025-09-01', end: '2025-09-07', progress: 50 },
  //     { id: '2', name: 'Development', start: '2025-09-08', end: '2025-09-20', progress: 20 },
  //     { id: '3', name: 'Testing', start: '2025-09-21', end: '2025-09-25', progress: 0 },
  //   ];
  // }
  private getGanttOptions(): GanttOptions {
    return {
      view_mode: 'Week',
      on_click: task => console.log('Task clicked', task),
      on_date_change: task => console.log('Task updated', task),
    };
  }
  private createPieChart(data: ChartData<'pie'>) {
    new Chart(this.pieCanvas.nativeElement, {
      type: 'pie',
      data,
      options: { responsive: true }
    } as ChartConfiguration);
  }

  private createBarChart(data: ChartData<'bar'>) {
    new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data,
      options: { responsive: true }
    } as ChartConfiguration);
  }

  private createGanttChart(tasks: GanttTask[]) {
    const options: GanttOptions = {
      view_mode: 'Week',
      on_click: task => console.log('Task clicked', task),
      on_date_change: task => console.log('Task updated', task),
    };
    new Gantt(this.ganttContainer.nativeElement, tasks, options);
  }

  // --- STATIC DATA ---
  private getStaticPieData(): ChartData<'pie'> {
    return {
      labels: ['Product A', 'Product B', 'Product C'],
      datasets: [{
        data: [120, 90, 60],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }]
    };
  }

  private getStaticBarData(): ChartData<'bar'> {
    return {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [{
        label: 'Monthly Sales',
        data: [5000, 7000, 4000, 6000, 8000],
        backgroundColor: '#36A2EB'
      }]
    };
  }

  private getStaticGanttTasks(): GanttTask[] {
    return [
      { id: '1', name: 'Design', start: '2025-09-01', end: '2025-09-07', progress: 50 },
      { id: '2', name: 'Development', start: '2025-09-08', end: '2025-09-20', progress: 20 },
      { id: '3', name: 'Testing', start: '2025-09-21', end: '2025-09-25', progress: 0 },
    ];
  }
}