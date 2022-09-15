import { Course } from './../../Models/course';
import { Observable } from 'rxjs';
import { CoursesService } from './../../Services/courses.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {

  constructor(private router:ActivatedRoute,private coursesProvider:CoursesService) { }
  currentCourse!: Course;
  flagContentFAQ: boolean = true;
  ngOnInit(): void {
    this.router.paramMap.subscribe(paramMap => {
      if (paramMap.has('id')) {
        this.coursesProvider.getCourse(Number(paramMap.get('id'))).subscribe(response => {
          this.currentCourse = response;
         });
      }
    });
  }
  toggleOpenLectures(itemID: any) {
    document.querySelectorAll(".lectures").forEach(lectureUl => {
      if (lectureUl.id != itemID) {
        lectureUl.classList.remove("open-lectures");
      }
    });
    const element = document.getElementById(itemID);
    if (element?.classList.contains("open-lectures")) {
      element.classList.remove("open-lectures");
    } else {
      element?.classList.add("open-lectures");
    }
  }
  toggleActiveTab() {
    this.flagContentFAQ = !this.flagContentFAQ;
  }
}
