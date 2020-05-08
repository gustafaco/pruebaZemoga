import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  celebs: any = [];

  stateVote:any={"state":false}
  constructor(private httpClient: HttpClient){}


  ngOnInit(): void {
    this.httpClient.get("assets/celeb.json").subscribe(data =>{
      console.log(data);
      this.celebs = data;
    })
  }
  
  OnVote(){
    this.stateVote= true
   
    
  }

}
