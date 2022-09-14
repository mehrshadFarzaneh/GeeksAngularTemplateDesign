import { Course } from './../Models/course';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  Courses = new Subject<Course[] >();
  constructor(private http: HttpClient) { }
  getSummeryOfCourses() {
    this.http.get<Course[]>(environment.urlAddress + "/courses-summery").subscribe(response => {
      this.Courses.next(response);
    }, error => {
      debugger;
      //***** */ BE SURE JSON_SERVER IS RUNNING */ ********
      alert("Open Your Inspector And Refresh Again For Debugging...");
    })
  }
  getCourse(id:number) {
    return this.http.get<Course>(environment.urlAddress + "/courses-summery/" + id);
  }
}
