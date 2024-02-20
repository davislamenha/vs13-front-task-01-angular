import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotaDoisComponent } from './rota-dois.component';

describe('RotaDoisComponent', () => {
  let component: RotaDoisComponent;
  let fixture: ComponentFixture<RotaDoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RotaDoisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RotaDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
