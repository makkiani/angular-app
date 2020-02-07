import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bowler',
  templateUrl: './bowler.component.html',
  styleUrls: ['./bowler.component.css']
})
export class BowlerComponent implements OnInit {

@ Input () bestBowler;

players = ["kiani", "Ali", "Fahad"];

  bowler = {
    name : "Kiani",
    wickets : 300,
    average : 3,
    isGoodBowler : true

  }
  constructor() { }

  ngOnInit() {
  }

}


