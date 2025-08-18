import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Layoutcomponent } from './layout.component';

describe('Layout', () => {
  let component: Layoutcomponent;
  let fixture: ComponentFixture<Layoutcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Layoutcomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Layoutcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
