import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedService {

  private category = new BehaviorSubject({});
  categoryClick = this.category.asObservable();
  private searchedSubject = new BehaviorSubject('');
  currentSearchedString = this.searchedSubject.asObservable();

  constructor() { }

  setCategory(categoryList) {
    this.category.next(categoryList);
  }
  search(s: string){
    this.searchedSubject.next(s)
  }
}