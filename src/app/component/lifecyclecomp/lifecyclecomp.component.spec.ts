import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecyclecompComponent } from './lifecyclecomp.component';

describe('LifecyclecompComponent', () => {
  let component: LifecyclecompComponent;
  let fixture: ComponentFixture<LifecyclecompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecyclecompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecyclecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
