import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductGridComponent } from './list-product-grid.component';

describe('ListProductGridComponent', () => {
  let component: ListProductGridComponent;
  let fixture: ComponentFixture<ListProductGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProductGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
