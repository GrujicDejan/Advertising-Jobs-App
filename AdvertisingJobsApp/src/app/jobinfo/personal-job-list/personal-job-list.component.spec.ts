import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalJobListComponent } from './personal-job-list.component';

describe('PersonalJobListComponent', () => {
  let component: PersonalJobListComponent;
  let fixture: ComponentFixture<PersonalJobListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalJobListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalJobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
