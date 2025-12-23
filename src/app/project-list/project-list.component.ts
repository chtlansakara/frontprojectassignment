import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-list',
  standalone: false,
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent implements OnInit{
  //to hold projects list - when get all
  projects: Project[] = [];
  //to hold a project - when being added
  project:Project= new Project("");

  constructor(
    private projectService:ProjectService
  ){}

  ngOnInit(): void {
      //loading project list from database to the class array
      this.getAllProjects();
  }

  //method - get all projects
  getAllProjects(){
    return this.projectService.getAllProjects().subscribe(
      // returned data is assigned to the array of projects
      data => {
        this.projects = data;
      }
    )
  }

  //method - add project
  addProject(){
    return this.projectService.addProject(this.project).subscribe(
      //when data is returned - refresh the project list & make the form empty
      data =>{
        this.getAllProjects();
        //setting form elements empty
        this.project.name = "";
      }
    )
  }

  //method- delete project
  deleteProject(id: any){
    return this.projectService.deleteProject(id).subscribe(
      //when data is returned - refreshing the project list
      data => {
        this.getAllProjects();
      }
    )
  }
}
