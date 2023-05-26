import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentmodifyComponent } from './studentmodify.component';

describe('StudentmodifyComponent', () => {
  let component: StudentmodifyComponent;
  let fixture: ComponentFixture<StudentmodifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentmodifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentmodifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
