import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatasupplierService {

  

  constructor() { }

  st=["hello","hi"];

  studentsdata=[
    {
      "name":"Nikhil",
      "id":101,
      "location":"Hyderabad"
    },
    {
      "name":"Sai",
      "id":102,
      "location":"Chennai"
    }

  ];

  u="hi ra";
}
