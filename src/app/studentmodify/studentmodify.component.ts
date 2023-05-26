import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-studentmodify',
  templateUrl: './studentmodify.component.html',
  styleUrls: ['./studentmodify.component.css']
})
export class StudentmodifyComponent {
  student:any;
  grades:any;

arr=[

  [true,true,false,false,false,true,true,false,false,false,false,true,false,true,false,false,true,true,false,true,false,true],
  [true,true,false,false,false,true,true,false,false,false,false,true,false,true,false,false,true,true,false,true,false,true],
  [true,true,false,false,false,true,true,false,false,false,false,true,false,true,false,false,true,true,false,true,false,true],
  [true,true,false,false,false,true,true,false,false,false,false,true,false,true,false,false,true,true,false,true,false,true],
  [true,true,false,false,false,true,true,false,false,false,false,true,false,true,false,false,true,true,false,true,false,true],
  [true,true,false,false,false,true,true,false,false,false,false,true,false,true,false,false,true,true,false,true,false,true],

 
 


]
arr1=[1,2,3,4,5,6];
  constructor(private http:HttpClient,private http1:HttpClient,private route:ActivatedRoute)
  {

  }

  ngOnInit()
  {

    var id=this.route.snapshot.paramMap.get('id')
    
    var data=this.http.get('http://localhost:8080/studentslist/'+id);
    data.subscribe(data=>this.student=data);

    var data1=this.http1.get('http://localhost:8080/studentgrades/'+id);
    data1.subscribe(data1=>this.grades=data1);
    

  }

}
