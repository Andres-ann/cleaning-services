import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnContactComponent } from './btn-contact.component';

describe('BtnContactComponent', () => {
  let component: BtnContactComponent;
  let fixture: ComponentFixture<BtnContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
