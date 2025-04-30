import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingSystemDemoComponent } from './loading-system-demo.component';

describe('LoadingSystemDemoComponent', () => {
  let component: LoadingSystemDemoComponent;
  let fixture: ComponentFixture<LoadingSystemDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingSystemDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadingSystemDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
