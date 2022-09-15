import { SharedModule } from './../../shared/shared.module';

import { GeeksAcademyBannerComponent } from './components/geeks-academy-banner/geeks-academy-banner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { GeeksAcademyExtraInfoComponent } from './components/geeks-academy-extra-info/geeks-academy-extra-info.component';
import { HomePageComponent } from './home-page.component';
import { ExtraInfoSectionComponent } from './components/geeks-academy-extra-info/extra-info-section/extra-info-section.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SharedModule,TranslateModule
  ],
  declarations: [
    HomePageComponent,
    GeeksAcademyExtraInfoComponent,
    GeeksAcademyBannerComponent,
    ExtraInfoSectionComponent
  ],
  exports: [GeeksAcademyExtraInfoComponent,
    GeeksAcademyBannerComponent,
  ExtraInfoSectionComponent],

})
export class HomePageModule { }
