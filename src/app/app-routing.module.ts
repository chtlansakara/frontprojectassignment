import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { AssignmentComponent } from './assignment/assignment.component';

const routes: Routes = [
  {path:"students", component:StudentListComponent},
  {path:"students/addStudent", component:StudentFormComponent},
  {path:"students/updateStudent/:id", component: StudentFormComponent},
  {path:"projects", component:ProjectListComponent},
  {path:"assignment", component:AssignmentComponent},
  {path:"",redirectTo:"students", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
