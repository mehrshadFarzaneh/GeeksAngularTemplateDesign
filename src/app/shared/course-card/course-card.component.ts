import { Course } from './../../Models/course';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
  @Input() course!:Course;
  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.course)
  }
  goToPage(id:string) {
    this.router.navigate(['course/'+id]);
  }

}
