import { Component, Input, Output } from '@angular/core';
import { Chart, ChartData, ChartType} from 'chart.js';


@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent {
  @Input('colors') colors = undefined;
  @Input('labels') doughnutChartLabels: string[] = [ 'Label1', 'Label2', 'Label3' ];
  @Input('data') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ],
        backgroundColor: this.colors
      }
    ]
  };

  @Input() titleNew: string = 'Sin titulo';
}


