import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

import { HeaderComponent } from './header.component';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    MatToolbarModule,
    MatIconModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
