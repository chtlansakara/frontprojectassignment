import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { Project } from '../project';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-projects',
  standalone: false,
  templateUrl: './student-projects.component.html',
  styleUrl: './student-projects.component.css'
})
export class StudentProjectsComponent implements OnInit {
  // empty Student object
  student: Student = new Student("",0,[]);
  // empty Project array - for available projects
  availableProjectsList : Project[] = [];
  // variable to hold the project id - being added
  projectId: any;

  // injecting services
  constructor(
    private studentService :StudentService,
    private activatedoute : ActivatedRoute
  ){}

  
  ngOnInit(): void {
      //to extract the relevant student id from the activated route 
      this.student.id = this.activatedoute.snapshot.params["id"];
      //update the class properties with relevant student data
      this.refreshPage();
  }

  //find the student by the id and load to the Student object
  getStudentById(){
    this.studentService.getStudentsById(Number(this.student.id)).subscribe(
      data => {
        //assign the returned data to the Student object
        this.student = data;
      }
    )
  }

  //find available projects for the student
  getAvailableProjects(){
    this.studentService.getAvailableStudentProjects(this.student.id).subscribe(
      data =>{
        //assigning to the class variable
        this.availableProjectsList = data;
      }
    )
  }

  //method to refresh the page -to call both above functions
  refreshPage(){
    //load to student object
    this.getStudentById();
    //load to available project list
    this.getAvailableProjects();
  }

  //method to add a new project to student's projects list
  addProject(){
    this.studentService.addProjectToStudent(this.student.id, this.projectId).subscribe(
      data => {
        //refresh page to load the component properties again from backend
        this.refreshPage();
      }
    )
  }

  //method to delete a new project to student's projects list
  deleteProject(projectId: any){
    //we use the parameter for projectId here
    this.studentService.deleteProjectOfStudent(this.student.id, projectId).subscribe(
      data => {
        //refresh page to load the component properties again from backend
        this.refreshPage();
      }
    )
  }
}
