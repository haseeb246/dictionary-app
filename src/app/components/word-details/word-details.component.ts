import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Word } from 'src/app/common/word';
import { WordService } from 'src/app/services/word.service';

@Component({
  selector: 'app-word-details',
  templateUrl: './word-details.component.html',
  styleUrls: ['./word-details.component.css']
})
export class WordDetailsComponent implements OnInit {

  word!: Word;

  constructor(private wordService: WordService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleWordDetails();
    })
  }

  handleWordDetails() {
    
    //get the "id" param string. convert to a number using "+" symbol
    const theWordId: number = +this.route.snapshot.paramMap.get('id')!;

    this.wordService.getWord(theWordId).subscribe(
      data => {
        this.word = data;
      }
    )
  }

}
