import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Registercomponent } from './register.component';

describe('Register', () => {
  let component: Registercomponent;
  let fixture: ComponentFixture<Registercomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Registercomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Registercomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
