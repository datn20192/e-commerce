import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarDComponent } from './sidebar-d.component';

describe('SidebarDComponent', () => {
  let component: SidebarDComponent;
  let fixture: ComponentFixture<SidebarDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
