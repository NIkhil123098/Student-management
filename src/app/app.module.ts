import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routings } from './app-routing.module';
import { StiddetailsComponent } from './stiddetails/stiddetails.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentslistComponent } from './studentslist/studentslist.component';
import { StudentmodifyComponent } from './studentmodify/studentmodify.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddstudentComponent } from './addstudent/addstudent.component';



@NgModule({
  declarations: [
    AppComponent,
    routings,
    StiddetailsComponent,
    StudentslistComponent,
    StudentmodifyComponent,
    AddstudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,AddstudentComponent]
})
export class AppModule { }
