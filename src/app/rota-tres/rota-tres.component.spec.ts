import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotaTresComponent } from './rota-tres.component';

describe('RotaTresComponent', () => {
  let component: RotaTresComponent;
  let fixture: ComponentFixture<RotaTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RotaTresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RotaTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
