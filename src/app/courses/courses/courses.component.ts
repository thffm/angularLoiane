
import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor() { }
  lista : Course[] = [
    {_id:"1",name:"Angular",category:"front-end"}
  ];
  displayedColumns = ['name','category'];

  ngOnInit(): void {
  }

}
