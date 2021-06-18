import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBoardPublicComponent } from './list-board-public.component';

describe('ListBoardPublicComponent', () => {
  let component: ListBoardPublicComponent;
  let fixture: ComponentFixture<ListBoardPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBoardPublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBoardPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
