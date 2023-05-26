import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatasupplierService } from '../datasupplier.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  @Input() fromParent:any;

  @Output() public childInfo=new EventEmitter();

  fun1()
  {
    this.childInfo.emit(10);
    
  }

  a="hello";
  users=["Nikhil","Lokesh","Sai"];
  
  
  status=true;
  obj=new DatasupplierService();
  students=this.obj.studentsdata;
  stu=this.obj.st;
  a1=this.obj.u;

  
  

}
