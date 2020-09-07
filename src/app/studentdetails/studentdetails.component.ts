import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {
   name ="";
   students:any[];
  constructor(private _studentService:StudentsService ) { }

  ngOnInit() {
    //this.name = this._studentService.getName();
    this.students = this._studentService.students;
  }

}
