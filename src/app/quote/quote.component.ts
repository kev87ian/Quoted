import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [

    new Quote(1," The only serious question in life is whether to kill yourself or not.", "Albert Camus", "Kevin", 8,2,new Date(2019,2,22)), 
    new Quote(2,"When the soul suffers too much, it develops a taste for misfortune.", "Albert Camus", "Kevin",0,0,new Date(2019,2,30)),
   
    ]
  

  
  constructor() {
  }

  ngOnInit() {
  }

}