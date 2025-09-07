import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSectionComponentrestoration } from './contact-section.component';

describe('ContactSectionComponent', () => {
  let component: ContactSectionComponentrestoration;
  let fixture: ComponentFixture<ContactSectionComponentrestoration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactSectionComponentrestoration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactSectionComponentrestoration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
