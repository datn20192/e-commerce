import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedService {

  private category = new BehaviorSubject('');
  categoryClick = this.category.asObservable();

  constructor() { }

  setCategory(categoryId: string) {
    this.category.next(categoryId)
  }
  
}