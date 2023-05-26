import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'studentmanagement';
  parent="Hi ra pavanu";
  msg=""

  a1:any;
  a2:any;
  a3:any;
  a4:any;
  c1()
  {
this.a1="active";
this.a2="inactive";
this.a3="inactive";
this.a4="inactive";

  }
  c2()
  {
this.a1="inactive";
this.a2="active";
this.a3="inactive";
this.a4="inactive";


  }
  c3()
  {
this.a1="inactive";
this.a2="inactive";
this.a3="active";
this.a4="inactive";
  }
  c4()
  {
this.a1="inactive";
this.a2="inactive";
this.a3="inactive";
this.a4="active";
  }
  fun1()
  {
    this.a1="Go Back";
    alert(this.a1);
  }
  onclicked()
  {
   this.msg="Child button clicked";
  }
  fun2()
  {

  }
}
