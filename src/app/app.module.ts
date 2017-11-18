import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { CareerComponent } from './pages/career/career.component';
import { CarComponent } from './pages/car/car.component';
import { TopComponent } from './pages/top/top.component';
import { BrandComponent } from './pages/brand/brand.component';

@NgModule({
  declarations: [
    AppComponent,
    CareerComponent,
    CarComponent,
    TopComponent,
    BrandComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatCardModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
