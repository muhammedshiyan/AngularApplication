import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsSectionrestoration } from './testimonials-section.component';

describe('TestimonialsSectionComponent', () => {
  let component: TestimonialsSectionrestoration;
  let fixture: ComponentFixture<TestimonialsSectionrestoration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialsSectionrestoration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonialsSectionrestoration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
