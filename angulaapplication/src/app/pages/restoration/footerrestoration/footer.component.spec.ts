import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponentrestoration } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponentrestoration;
  let fixture: ComponentFixture<FooterComponentrestoration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponentrestoration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponentrestoration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
