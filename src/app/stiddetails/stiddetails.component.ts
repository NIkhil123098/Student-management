import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatasupplierService } from '../datasupplier.service';
import { outputAst } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stiddetails',
  templateUrl: './stiddetails.component.html',
  styleUrls: ['./stiddetails.component.css']
})
export class StiddetailsComponent {


  @Output() public backi=new EventEmitter();
ngOnInit()
{
  this.backi.emit("Go back");
}
  
  public cid;
  public cname:any;
  public cloc:any;
  
  constructor(private _r:ActivatedRoute)
  {
this.cid=_r.snapshot.paramMap.get('id');

var stname;
  var stid
  var stloc
let obj=new DatasupplierService().studentsdata;
var a:any;
a=this.cid;

obj.forEach(v => {

  if(v.id==a)
  {
    this.cname=v.name;
    this.cloc=v.location;
  }
 
});


  }



 

}
