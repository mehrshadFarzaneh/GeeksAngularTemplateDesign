import { Course } from './../../Models/course';
import { CoursesService } from './../../Services/courses.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import SwiperCore, { SwiperOptions, Navigation, Autoplay } from 'swiper';
SwiperCore.use([Navigation, Autoplay]);

@Component({
  selector: 'app-courses-navigation',
  templateUrl: './courses-navigation.component.html',
  styleUrls: ['./courses-navigation.component.scss']
})
export class CoursesNavigationComponent implements OnInit, OnDestroy {
  courses: Course[] = [];
  private coursesSubscription!: Subscription;
  config: SwiperOptions = {
    spaceBetween: 20,
    navigation: {
      nextEl: '.custom-button-next',
      prevEl: '.custom-button-prev',
    },
    loop: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    preloadImages: false,
      // Enable lazy loading
      lazy: true,
  };
  swiperBreakpoint = {
    '0': {
      slidesPerView: 1
    },
    '768': {
      slidesPerView: 2
    },
    '992': {
      slidesPerView: 4
    }
  };
  constructor(private coursesProvider:CoursesService) { }

  ngOnInit(): void {
    this.coursesProvider.getSummeryOfCourses()
    this.coursesSubscription =  this.coursesProvider.Courses.subscribe(data => {
      this.courses = data;
    })
  }
  ngOnDestroy(): void {
    this.coursesSubscription.unsubscribe();
  }
}
