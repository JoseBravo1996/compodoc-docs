
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    SharedModule
  ]
})
export class DefaultModule { }
