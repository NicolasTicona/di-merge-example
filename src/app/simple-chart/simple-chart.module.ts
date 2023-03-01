
import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleChartService } from './simple-chart.service';

@NgModule({
  imports: [CommonModule],
  providers: [SimpleChartService]
})
export class SimpleChartModule { }