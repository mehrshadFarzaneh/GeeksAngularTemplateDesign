import { CourseCardComponent } from './course-card/course-card.component';
import { BtnComponent } from './btn/btn.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoursesNavigationComponent } from './courses-navigation/courses-navigation.component';
import { SwiperModule } from 'swiper/angular';
import { TooltipComponent } from './tooltip/tooltip.component';



@NgModule({
  declarations: [
BtnComponent,
    CoursesNavigationComponent,
CourseCardComponent,
    TooltipComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SwiperModule
  ],
  exports: [
    BtnComponent,
    CoursesNavigationComponent,
    CourseCardComponent
  ]
})
export class SharedModule { }
