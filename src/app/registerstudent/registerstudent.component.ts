import { Component, OnInit } from '@angular/core';
import { Student } from '../student';


@Component({
  selector: 'app-registerstudent',
  templateUrl: './registerstudent.component.html',
  styleUrls: ['./registerstudent.component.css']
})
export class RegisterstudentComponent implements OnInit {

studentModel = new Student("Rajat","Ramm",436464575,"ram@gmail.com");

  constructor() { }

  ngOnInit() {
  }
  submitData(userForm){
    console.log(userForm);
  }

}
