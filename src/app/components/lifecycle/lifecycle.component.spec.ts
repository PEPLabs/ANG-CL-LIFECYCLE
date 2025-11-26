import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleComponent } from './lifecycle.component';

describe('LifecycleComponent', () => {
  let component: LifecycleComponent;
  let fixture: ComponentFixture<LifecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update time when component is mounted', () => {
    const before = Date.now();
    fixture.detectChanges();
    const after = Date.now();

    expect(component.time).toBeGreaterThanOrEqual(before);
    expect(component.time).toBeLessThanOrEqual(after);
      
  })

  it('should trigger alert when component is unmounted', () => {
    // Spy on the alert function
    const alertSpy = spyOn(window, 'alert');

    // Manually call ngOnDestroy to simulate component unmounting
    component.ngOnDestroy();

    // Assert that the alert function was called
    expect(alertSpy).toHaveBeenCalled();
  });
});
