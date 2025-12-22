import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit
 {
  title = 'frontprojectassignment';
  is_production = environment.PRODUCTION;

  ngOnInit(): void {
      if(this.is_production){
        console.log("my environement is Production");
      }else{
        console.log("my environment is Dev");
      }
  }
}
