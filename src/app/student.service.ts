import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Student } from './student';
import { Observable } from 'rxjs';

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
}
