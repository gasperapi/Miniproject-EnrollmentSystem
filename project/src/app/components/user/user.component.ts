import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
  
})
export class UserComponent implements OnInit {

  public student_id:number; //1
  public name:string; //2
  public surname:String; //3
  public sex:String; //6
  public student_age:number;
  public student_adress:String; //5
  public student_years:number; //4
  public student_birthday:String; //7

  //Student profile
  public student_major:String; //8
  public student_faculty:String; //9
  public student_height:number; //10
  public student_weight:number; //11
  public student_bloodtype:String; //12
  


  
  constructor() { }

  ngOnInit(){
      this.student_id=5904062636452;
      this.name="Thanawat";
      this.surname="Sharkw"
      this.sex="Male"
      this.student_age=24
      this.student_adress="Nontaburi,Thailand"
      this.student_years=6
      this.student_birthday="1998-10-14";
      //profile
      this.student_major="Computer Science"
      this.student_faculty="Applied Science"
      this.student_height=174;
      this.student_weight=55;
      this.student_bloodtype="B";
      
  }

}
