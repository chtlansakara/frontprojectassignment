import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-student-form',
  standalone: false,
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent implements OnInit {
  student: Student = new Student("",0,[]);
  //to check the average validity
  isOutOfRange = false;

  //to use id - in updating a student
  id: any;

  constructor(
    private studentService :StudentService,
    private router : Router,
    private activeRoute : ActivatedRoute,
  ){}

  //to extract the id in update modes of the form
  ngOnInit(): void {
    //extracting the id from activated route
    this.id = this.activeRoute.snapshot.params["id"];

    //based on the presence of 'id' - set to 'add' or 'update' modes
    if(this.id){
      //finding the student's data if there is an id & assign it
      this.studentService.getStudentsById(this.id).subscribe(
        data => {
          this.student = data;
        }
      )
    }
  }

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

    //using an observer - to add & update a student
    //condition for updating an existing student - if there is an id
    if(this.id){
      //updating the student
      this.studentService.updateStudent(this.id,this.student).subscribe(observer);
    }else{
      //adding a new student
      this.studentService.addStudent(this.student).subscribe(observer);
    }
    
  }
}
