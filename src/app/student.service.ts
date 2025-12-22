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

}
