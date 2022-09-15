import { CourseCardComponent } from './course-card/course-card.component';
import { BtnComponent } from './btn/btn.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoursesNavigationComponent } from './courses-navigation/courses-navigation.component';
import { SwiperModule } from 'swiper/angular';
import { TooltipComponent } from './tooltip/tooltip.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
BtnComponent,
    CoursesNavigationComponent,
CourseCardComponent,
    TooltipComponent,
    DropdownMenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SwiperModule,
    TranslateModule
  ],
  exports: [
    BtnComponent,
    CoursesNavigationComponent,
    CourseCardComponent,

  ]
})
export class SharedModule { }

