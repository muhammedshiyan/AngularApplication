import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSectionComponentrestoration } from './hero-section.component';

describe('HeroSectionComponent', () => {
  let component: HeroSectionComponentrestoration;
  let fixture: ComponentFixture<HeroSectionComponentrestoration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSectionComponentrestoration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSectionComponentrestoration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
