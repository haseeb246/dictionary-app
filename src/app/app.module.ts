import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WordListComponent } from './components/word-list/word-list.component';
import { HttpClientModule } from '@angular/common/http'
import { WordService } from './services/word.service';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { WordDetailsComponent } from './components/word-details/word-details.component';
import { SearchService } from './services/search.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path: 'words/:id', component: WordDetailsComponent},
  {path: 'search/:keyword', component: WordListComponent},
  {path: 'words', component: WordListComponent},
  {path: '', redirectTo: '/words', pathMatch: 'full'},
  {path: '**', redirectTo: '/words', pathMatch: 'full'}

];

@NgModule({
  declarations: [
    AppComponent,
    WordListComponent,
    SearchComponent,
    WordDetailsComponent    
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [WordService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
