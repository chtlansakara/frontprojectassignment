import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-assignment',
  standalone: false,
  templateUrl: './assignment.component.html',
  styleUrl: './assignment.component.css'
})
export class AssignmentComponent implements OnInit{
  //to hold the hashmap from the assignment from backend
  assignmentResult: Map<String,String> = new Map();

  constructor(private studentService: StudentService){}

  //to get assignment when loading the component
  ngOnInit(): void {
      this.getAssignment();
  }

  
  //method to get assignment result
  getAssignment(){
    this.studentService.getStudentAssignment().subscribe(
      data => {
        //assign to the hashmap of class
        this.assignmentResult = data;
      }
    )
  }


}
