import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CareerComponent } from './career.component';


@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    TranslateModule,
    BrowserAnimationsModule
  ],
  declarations: [
    CareerComponent
  ],
  exports: [
    CareerComponent
  ]
})
export class CareerModule { }
