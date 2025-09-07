import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingComponentrestoration } from './restorationlanding.component';

describe('RestaurentlandingComponent', () => {
  let component: LandingComponentrestoration;
  let fixture: ComponentFixture<LandingComponentrestoration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingComponentrestoration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingComponentrestoration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
