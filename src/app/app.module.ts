import { FormsModule } from '@angular/forms';
import { HomePageModule } from './Pages/home-page/home-page.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { CoursesPageComponent } from './Pages/courses-page/courses-page.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    // CourseCardComponent,
    // BtnComponent,
    CoursesPageComponent,
    // HomePageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule, FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
