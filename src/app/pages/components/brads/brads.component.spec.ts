import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BradsComponent } from './brads.component';

describe('BradsComponent', () => {
  let component: BradsComponent;
  let fixture: ComponentFixture<BradsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BradsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BradsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
