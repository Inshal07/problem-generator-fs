import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedMeComponent } from './assigned-me.component';

describe('AssignedMeComponent', () => {
  let component: AssignedMeComponent;
  let fixture: ComponentFixture<AssignedMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedMeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignedMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
