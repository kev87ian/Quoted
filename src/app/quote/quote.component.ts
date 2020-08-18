import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

 
  quotes = [

    new Quote(1," The best part about being a pessimist is that I'm either right, or pleasantly suprised.", "George F. Will", "Mathenge Kevin", 0,0,new Date(2019,2,22)), 
    new Quote(2,"When the soul suffers too much, it develops a taste for misfortune.", "Albert Camus", "Mathenge Kevin",0,0,new Date(2020,2,30)),
    new Quote(3,"If you tell a big enough lie and tell it frequently enough, it will be believed.", "Adolf Hitler", "Mbugua Brian",0,0,new Date(2020,2,30)),
    new Quote(4, "If you are lonely when you're alone, you are in bad company.", "Jean-Paul Sartre", "Mathenge Kevin",0,0,new Date(2020,1,30)),
    new Quote(5,"Cogito ergo sum. (I think, therefore I am.)", "Rene Descartes", "Juliet",0,0,new Date(2020,2,30))
   
    ]

  quoteSubmission(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }

  toogleDetails(index){
    this.quotes[index].showDesc = !this.quotes[index].showDesc;
  }

  deleteQuote(quoteDelete,index){
    if(quoteDelete){
      let deletion = confirm(`You really wanna do that?`)
      if(deletion){
        this.quotes.splice(index,1);
      }
      
    }
  }
  upVote(upVoting,index){
    if(upVoting){
      this.quotes[index].upvotes +=1;
    }
  }
  downVote(downVoting,index){
    if(downVoting){
      this.quotes[index].downVote +=1;
    }
  }
  constructor() {
  }

  ngOnInit() {
  }

}
