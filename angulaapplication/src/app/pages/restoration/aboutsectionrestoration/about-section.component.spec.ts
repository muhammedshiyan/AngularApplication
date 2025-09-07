import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSectionComponentrestoration } from './about-section.component';

describe('AboutSectionComponent', () => {
  let component: AboutSectionComponentrestoration;
  let fixture: ComponentFixture<AboutSectionComponentrestoration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutSectionComponentrestoration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSectionComponentrestoration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
