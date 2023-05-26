import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { StiddetailsComponent } from './stiddetails/stiddetails.component';
import { StudentslistComponent } from './studentslist/studentslist.component';
import { StudentmodifyComponent } from './studentmodify/studentmodify.component';
import { AddstudentComponent } from './addstudent/addstudent.component';

const routes: Routes = [

  
  {path:"students",component:StudentsComponent},
  {path:"students/:id",component:StiddetailsComponent},
  {path:"studentslist",component:StudentslistComponent},
  {path:"studentslist/:id",component:StudentmodifyComponent},
  {path:"addstudent",component:AddstudentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
export const routings=[StudentsComponent,StiddetailsComponent,StudentslistComponent,StudentmodifyComponent,AddstudentComponent]

