import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import {InlineSVGModule} from 'ng-inline-svg';
import {NgApexchartsModule} from 'ng-apexcharts';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardsModule } from 'src/app/_metronic/partials/content/dashboards/dashboards.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MatDialogModule,
    DashboardsModule,
    InlineSVGModule,
    NgApexchartsModule,
    ReactiveFormsModule,
  ]
})
export class ClientModule { }
