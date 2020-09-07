import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterstudentComponent } from './registerstudent/registerstudent.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';

const routes: Routes = [
  {path:'register' ,component:RegisterstudentComponent},
  {path:'studentlist', component:StudentlistComponent},
  {path:'studentdetails', component:StudentdetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
