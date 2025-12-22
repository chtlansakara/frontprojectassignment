import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-form',
  standalone: false,
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {
  student: Student = new Student("",0,[]);
  //to check the average validity
  isOutOfRange = false;

  constructor(
    private studentService :StudentService,
    private router : Router
  ){}

  upsert(){
    //checking for average validity
    const average = Number(this.student.average);
    if(average<0 || average>10 ){
      this.isOutOfRange = true;
      return;
    }
    //if average is valid, proceeding to create the student
    //using Observer instead subscribe() with returned Observable

    //creating an observer
    const observer = {
      next: (data:Student) => { this.router.navigate(["/students"])},
      error: (error:any) => {console.log(error)},
      complete:()=>{console.log("Operation completed.")}
    };

    //using an observer
    this.studentService.addStudent(this.student).subscribe(observer);
  }
}
