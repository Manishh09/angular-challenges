import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationSystemDemoComponent } from './notification-system-demo.component';

describe('NotificationSystemDemoComponent', () => {
  let component: NotificationSystemDemoComponent;
  let fixture: ComponentFixture<NotificationSystemDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationSystemDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotificationSystemDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
