import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent {
  body:any;
  p:any;
  a:any;
  att:any;


  public checkoutForm = this.formBuilder.group({
    name: '',
    id: null,
    loc:'',
    degree:'',
    course:'',
    present:null,
    absent:null,
    attendance:null

  });
constructor(private formBuilder:FormBuilder,private http:HttpClient)
{
  
}
onSubmit()
{
this.p=this.checkoutForm.value.present;
this.a=this.checkoutForm.value.absent;
this.att=(this.p/(this.p+this.a))*100;
  this.body=
  {
"id":this.checkoutForm.value.id,
"name":this.checkoutForm.value.name,
"loc":this.checkoutForm.value.loc,
"present":this.checkoutForm.value.present,
"absent":this.a,
"attendance":this.att,
"course":this.checkoutForm.value.course,
"degree":this.checkoutForm.value.degree
  }
  
  this.http.post('http://localhost:8080/addstudent',this.body).subscribe();
  
  location.replace("http://localhost:4200/studentslist")
}


}
