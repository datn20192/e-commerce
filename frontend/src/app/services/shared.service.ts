import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedService {

  private category = new BehaviorSubject({});
  categoryClick = this.category.asObservable();

  constructor() { }

  setCategory(categoryList) {
    this.category.next(categoryList);
  }
  
}