import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  standalone: false,
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit{
  constructor(private studentService: StudentService){
  }
  students: Student[] = [];
  // property for maximum no of projects
  maxProjectsPerStudent:any;
  //property to bind to user's max input
  tempNumber: any;

  ngOnInit(): void {
      this.getAllStudents();
      // get max projects per student 
      this.getMaxProjectsPerStudent();
  }


  //method to get all students using the student service
  getAllStudents(){
    this.studentService.getAllStudents().subscribe(
      data => {
        this.students = data;
      }
    )
  }

  //method to delete a student
  deleteStudent(id:any){
    this.studentService.deleteStudent(id).subscribe(
      data => {
        this.getAllStudents();
      }
    )
  }

// -----------------------------------------------------
//method to get max projects per student number
getMaxProjectsPerStudent(){
  this.studentService.getMaxProjectsPerStudent().subscribe(
    data =>{
      //assign it to the class property
      this.maxProjectsPerStudent = data;
    }
  )
}

//method to update max projects per student
updateMaxProjectPerStudent(){
  this.studentService.updateMaxProjectsPerStudent(this.tempNumber).subscribe(
    data =>{
      //assign the returned updated value to the class property
      this.maxProjectsPerStudent = data;
    }
  )
}

}
