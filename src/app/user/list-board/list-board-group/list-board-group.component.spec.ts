import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBoardGroupComponent } from './list-board-group.component';

describe('ListBoardGroupComponent', () => {
  let component: ListBoardGroupComponent;
  let fixture: ComponentFixture<ListBoardGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBoardGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBoardGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
