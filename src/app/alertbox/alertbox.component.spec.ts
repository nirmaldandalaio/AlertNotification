import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertBoxComponent } from './alertbox.component';
import { AlertBoxService } from '../services/alertbox.service';

describe('AlertBoxComponent', () => {
  let component: AlertBoxComponent;
  let fixture: ComponentFixture<AlertBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertBoxComponent ],
      providers: [ AlertBoxService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
