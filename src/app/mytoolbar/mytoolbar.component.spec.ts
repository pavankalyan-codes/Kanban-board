import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MytoolbarComponent } from './mytoolbar.component';

describe('MytoolbarComponent', () => {
  let component: MytoolbarComponent;
  let fixture: ComponentFixture<MytoolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MytoolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MytoolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
