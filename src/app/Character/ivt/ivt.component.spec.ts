import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvtComponent } from './ivt.component';

describe('IvtComponent', () => {
  let component: IvtComponent;
  let fixture: ComponentFixture<IvtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IvtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IvtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
