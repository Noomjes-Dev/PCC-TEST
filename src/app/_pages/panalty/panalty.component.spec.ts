import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanaltyComponent } from './panalty.component';

describe('PanaltyComponent', () => {
  let component: PanaltyComponent;
  let fixture: ComponentFixture<PanaltyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanaltyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanaltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
