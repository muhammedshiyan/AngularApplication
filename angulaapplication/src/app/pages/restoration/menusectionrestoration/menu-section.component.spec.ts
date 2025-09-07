import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSectionComponentrestoration } from './menu-section.component';

describe('MenuSectionComponent', () => {
  let component: MenuSectionComponentrestoration;
  let fixture: ComponentFixture<MenuSectionComponentrestoration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuSectionComponentrestoration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuSectionComponentrestoration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
