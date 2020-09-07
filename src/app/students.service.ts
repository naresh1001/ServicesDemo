import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  students:any[];

  constructor() {
    this.students = [
        {"id":123,"name":"Naresh Chandra","email":"nfsfs@gmail.com","phoneNo":453645575668},
        {"id":124,"name":"Sumit Kumar","email":"xyz@gmail.com","phoneNo":677867868},
        {"id":125,"name":"Rajat Kumar","email":"nfsfs@gmail.com","phoneNo":885575668}
    ];
   }

  getName(){
    return "Ankit Verma";
  }
}
