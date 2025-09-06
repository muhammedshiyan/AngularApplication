import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantLandingComponent } from './restaurentlanding.component';

describe('RestaurentlandingComponent', () => {
  let component: RestaurantLandingComponent;
  let fixture: ComponentFixture<RestaurantLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantLandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
