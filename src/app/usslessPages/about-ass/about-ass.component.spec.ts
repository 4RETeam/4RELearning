import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAssComponent } from './about-ass.component';

describe('AboutAssComponent', () => {
  let component: AboutAssComponent;
  let fixture: ComponentFixture<AboutAssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutAssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutAssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
