import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css'],
  
})
export class StudentlistComponent implements OnInit {
   name = "";
   students:any[];
  constructor(private _studentService:StudentsService) { }

  ngOnInit() {
   //this.name = this._studentService.getName();
   this.students = this._studentService.students;
  }

}
