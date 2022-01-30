import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponentComponent } from './user-list.component';

describe('UserListComponentComponent', () => {
  let component: UserListComponentComponent;
  let fixture: ComponentFixture<UserListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});