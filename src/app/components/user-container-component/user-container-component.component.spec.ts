import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserContainerComponentComponent } from './user-container-component.component';

describe('UserContainerComponentComponent', () => {
  let component: UserContainerComponentComponent;
  let fixture: ComponentFixture<UserContainerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserContainerComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserContainerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
