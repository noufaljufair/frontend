import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DevicesComponent } from './devices.component';
import { FormsModule } from '@angular/forms';
import { NgbNavModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { HighlightModule } from 'ngx-highlightjs';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {InlineSVGModule} from 'ng-inline-svg';
import {GeneralModule} from '../../_metronic/partials/content/general/general.module';
import {MatTooltipModule} from "@angular/material/tooltip";

@NgModule({
  declarations: [DevicesComponent],
  imports: [
    CommonModule,
    FormsModule,
    GeneralModule,
    HighlightModule,
    NgbNavModule,
    NgbTooltipModule,
    RouterModule.forChild([
      {
        path: '',
        component: DevicesComponent,
      },
    ]),
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSortModule,
    MatInputModule,
    InlineSVGModule,
    MatTooltipModule,
  ],
})
export class DevicesModule {}
