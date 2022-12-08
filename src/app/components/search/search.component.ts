import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  msg: string = 'Chọpụta okwu igbo';
  lang: string = 'Igbo';
  btnMsg: string = 'Chọpụta okwu';
  language: string = 'igbo';

  constructor(private router: Router, private commDataSub: SearchService) {
    // // override the route reuse strategy
    // this.router.routeReuseStrategy.shouldReuseRoute = function () {
    //   return false;
    // };
  }

  ngOnInit(): void {
    this.commDataSub.currentLang.subscribe(
      (language) => (this.language = language)
    );
    console.log(`The langauge is ${this.language}`);
  }

  changeLanguage(checked: boolean) {
    if (checked) {
      this.msg = 'Chọpụta okwu igbo';
      this.lang = 'Igbo';
      this.btnMsg = 'Chọpụta okwu';
      this.commDataSub.changeLanguage('igbo');
      console.log('Language has been changed to Igbo.');
    } else {
      this.msg = 'Search an English word';
      this.lang = 'English';
      this.btnMsg = 'Search';
      this.commDataSub.changeLanguage('english');
      console.log('Langauge has been changed to English');
    }
  }

  doSearch(value: string) {
    debugger;
    console.log(value);
    let url = '';
    if (value) {
      url = `/search/${value}`;
    } else {
      url = '/search';
    }

    this.commDataSub.setSearch(value);
    this.router.navigateByUrl(url);
    console.log(`searching ${value}...`);
  }
}
