import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Student } from './student';
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  link= environment.BASE_HOST+"students/";

  constructor(private httpClient: HttpClient) { }

  //method to get all students
  getAllStudents():Observable<Student[]>{
    return this.httpClient.get<Student[]>(this.link);
  }

  //method to get student by id
  getStudentsById(id:Number):Observable<Student>{
    return this.httpClient.get<Student>(this.link+id);
  }

  //method to create a new student
  addStudent(student: Student):Observable<Student>{
    return this.httpClient.post<Student>(this.link,student);
  }

  //method to update a student
  updateStudent(id:Number, student:Student):Observable<Student>{
    return this.httpClient.put<Student>(this.link+id, student);
  }

  //method to delete a student
  deleteStudent(id:Number):Observable<String>{
    return this.httpClient.delete(this.link+id,{responseType:"text"});
  }

//--------------------------------------------------------------------
//Methods related to student's projects

//method to get available projects for a student
getAvailableStudentProjects(student_id:any):Observable<Project[]>{
  return this.httpClient.get<Project[]>(this.link+student_id+"/available-projects");
}

//method to add project for a student
addProjectToStudent(student_id:any, project_id:any):Observable<Student>{
  return this.httpClient.post<Student>(this.link+student_id+"/projects/"+project_id,"");
}

//method to delete project of a student
deleteProjectOfStudent(student_id:any, project_id:any):Observable<Student>{
  return this.httpClient.delete<Student>(this.link+student_id+"/projects/"+project_id);
}

//method to get max. no of projects allowed per student
getMaxProjectsPerStudent():Observable<Number>{
  return this.httpClient.get<Number>(this.link+"max-project");
}

//method to update max. no of projects allowed per student
updateMaxProjectsPerStudent(max:any): Observable<Number>{
  return this.httpClient.put<Number>(this.link+"max-project",max);
}

}
