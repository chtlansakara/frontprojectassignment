import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Project} from './project';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  link= environment.BASE_HOST+"projects/";
  
    constructor(private httpClient: HttpClient) { }
  
    //method to get all projects
    getAllProjects():Observable<Project[]>{
      return this.httpClient.get<Project[]>(this.link);
    }
  
    //method to get project by id
    getProjectsById(id:Number):Observable<Project>{
      return this.httpClient.get<Project>(this.link+id);
    }
  
    //method to create a new project
    addProject(project: Project):Observable<Project>{
      return this.httpClient.post<Project>(this.link,project);
    }
  
    //method to update a project
    updateProject(id:Number, project:Project):Observable<Project>{
      return this.httpClient.put<Project>(this.link+id, project);
    }
  
    //method to delete a project
    deleteProject(id:Number):Observable<String>{
      return this.httpClient.delete(this.link+id,{responseType:"text"});
    }
}
