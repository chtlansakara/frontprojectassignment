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

  ngOnInit(): void {
      this.getAllStudents();
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


}
