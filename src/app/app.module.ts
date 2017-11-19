import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeZh from '@angular/common/locales/zh';

import { AppComponent } from './app.component';
import { CarComponent } from './pages/car/car.component';
import { TopComponent } from './pages/top/top.component';
import { BrandComponent } from './pages/brand/brand.component';
import { AppRoutingModule } from './app.routing.module';
import { HeaderModule } from './shared/component';
import { CareerModule } from './pages/career/career.module';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
registerLocaleData(localeZh);

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    TopComponent,
    BrandComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MatCardModule,
    MatSelectModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    HeaderModule,
    CareerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
