import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfModalComponent } from './notf-modal.component';

describe('NotfModalComponent', () => {
  let component: NotfModalComponent;
  let fixture: ComponentFixture<NotfModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotfModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotfModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
