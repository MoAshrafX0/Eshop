import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetilesComponent } from './detiles.component';

describe('DetilesComponent', () => {
  let component: DetilesComponent;
  let fixture: ComponentFixture<DetilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetilesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
