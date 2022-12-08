import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Word } from '../common/word';

@Injectable({
  providedIn: 'root'
})
export class WordService {
 
  

  private baseUrl = 'http://localhost:8080/api/words'

  constructor(private httpClient: HttpClient) { }

  getWord(theWordId: number): Observable<Word> {
    
    // need to build URL based on word id
    const wordUrl = `${this.baseUrl}/${theWordId}`;

    return this.httpClient.get<Word>(wordUrl);
  }


  getWordList(): Observable<Word[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.words)
    );
  }

  searchWords(theKeyword: string): Observable<Word[]> {
    
    const searchUrl = `${this.baseUrl}/search/findByIgboWordContaining?igbo_word=${theKeyword}`;
    console.log(searchUrl);

    return this.httpClient.get<GetResponse>(searchUrl).pipe(
      map(response => response._embedded.words)
    );
  }

  searchEnglish(theKeyword: string): Observable<Word[]> {

    const searchEngUrl = `${this.baseUrl}/search/findByEnglishWordContainingOrEnglishSynonymsContaining?english_word=${theKeyword}&english_synonyms=${theKeyword}`;
    console.log(searchEngUrl);

    return this.httpClient.get<GetResponse>(searchEngUrl).pipe(
      map(response => response._embedded.words)
    );
  }
}

interface GetResponse {
  _embedded: {
    words: Word[];
  }
}
