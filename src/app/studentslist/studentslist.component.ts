import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-studentslist',
  templateUrl: './studentslist.component.html',
  styleUrls: ['./studentslist.component.css']
})
export class StudentslistComponent {

  students:any;

  

  constructor(private http:HttpClient)
  {
    

  }

  del1(val:any)
  {
    
    var st="http://localhost:8080/deletestudent/"+val
    this.http.get(st).subscribe();
    window.location.reload();

  }

  fun1()
  {
    const body={
"id":2000,
"name":"Subbu",
"loc":"Guntur",
"present":25,
"absent":10,
"degree":"B.Tech",
"course":"IT"

    }

    var data=this.http.post("http://localhost:8080/addstudent",body).subscribe();
    window.location.reload();
  }
  ngOnInit()
  {
    var data=this.http.get('http://localhost:8080/studentslist');
    data.subscribe(data=>this.students=data);
    
  }

  

}
