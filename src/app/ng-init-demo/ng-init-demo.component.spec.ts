import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgInitDemoComponent } from './ng-init-demo.component';

describe('NgInitDemoComponent', () => {
  let component: NgInitDemoComponent;
  let fixture: ComponentFixture<NgInitDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgInitDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgInitDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
