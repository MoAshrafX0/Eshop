import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticBransComponent } from './static-brans.component';

describe('StaticBransComponent', () => {
  let component: StaticBransComponent;
  let fixture: ComponentFixture<StaticBransComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaticBransComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticBransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
