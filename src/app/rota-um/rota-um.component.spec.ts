import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotaUmComponent } from './rota-um.component';

describe('RotaUmComponent', () => {
  let component: RotaUmComponent;
  let fixture: ComponentFixture<RotaUmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RotaUmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RotaUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
