import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private langSource = new BehaviorSubject<string>('igbo');
  currentLang = this.langSource.asObservable();

  private searchSub = new BehaviorSubject<string>('');
  currentSearch = this.searchSub.asObservable();
  constructor() {}

  changeLanguage(language: string) {
    this.langSource.next(language);
  }

  setSearch(searchTerm: string) {
    this.searchSub.next(searchTerm);
  }
}
