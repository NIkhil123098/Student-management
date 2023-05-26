import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StiddetailsComponent } from './stiddetails.component';

describe('StiddetailsComponent', () => {
  let component: StiddetailsComponent;
  let fixture: ComponentFixture<StiddetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StiddetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StiddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
