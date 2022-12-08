import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Word } from 'src/app/common/word';
import { SearchService } from 'src/app/services/search.service';
import { WordService } from 'src/app/services/word.service';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css'],
})
export class WordListComponent implements OnInit {
  words: Word[] = [];
  searchMode: boolean = false;
  language: string = '';

  constructor(
    private wordService: WordService,
    private route: ActivatedRoute,
    private langData: SearchService
  ) {}

  ngOnInit(): void {
    debugger;
    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    this.langData.currentLang.subscribe((language) => {
      this.language = language;
    });
    // if (this.isWordListCalled == false) {
    //   this.isWordListCalled = true;
    //   this.listWords();
    //   this.isWordListCalled = false;
    // }
    this.langData.currentSearch.subscribe((search) => {
      debugger;
      this.searchMode = search ? true : false;
      this.listWords(search);
    });
    console.log(`The langauge is ${this.language}`);
  }

  listWords(search: string) {
    debugger;
    this.langData.currentLang.subscribe(
      (language) => (this.language = language)
    );
    console.log(`The langauge is ${this.language}`);

    if (this.searchMode && this.language === 'igbo') {
      this.handleSearchWords(search);
    } else if (this.searchMode && this.language === 'english') {
      this.handleSearchEnglish(search);
    } else {
      this.handleListWords();
    }
  }

  handleSearchWords(theKeyword: string) {
    // const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;

    //now search for words using keyword
    this.wordService.searchWords(theKeyword).subscribe((data) => {
      this.words = data;
    });
  }

  handleSearchEnglish(theKeyword: string) {
    // const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;

    //now search for words using keyword
    this.wordService.searchEnglish(theKeyword).subscribe((data) => {
      this.words = data;
    });
  }

  handleListWords() {
    this.wordService.getWordList().subscribe((data) => {
      this.words = data;
    });
  }
}
