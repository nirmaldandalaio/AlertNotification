import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { AlertBoxComponent } from './alertbox.component';
import { AlertBoxService } from '../services/alertbox.service';
import { AlertType } from '../models/alertconfig';
import { of } from 'rxjs';
import { asyncScheduler } from 'rxjs';

describe('AlertBoxComponent', () => {
  let component: AlertBoxComponent;
  let service: AlertBoxService;
  let fixture: ComponentFixture<AlertBoxComponent>;
  const alertServiceStub = {
    getAlert() {
      const alerts = [{type: AlertType.Success, message: 'Success', id: 'success-alert'}];
      return of(alerts, asyncScheduler);
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertBoxComponent ],
      providers: [{provide: AlertBoxService, useValue: alertServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.alerts.push({type: AlertType.Success, 
      message: 'This is a success notification!!', 
      id: 'success-alert'
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show alert', (): void => {
    fixture.detectChanges();
    const element = fixture.nativeElement;
    let className: string = element.querySelector('.alert').className;
    expect(className.indexOf('alert')).toBeGreaterThan(-1);
    let colorClass: string = element.querySelector('.is-success').className;
    expect(colorClass.indexOf('is-success')).toBeGreaterThan(-1);
  });

  it('should show close button', (): void => {
    fixture.detectChanges();
    const element = fixture.nativeElement;
    let className:string = element.querySelector('.close').className;
    expect(className.indexOf('close')).toBeGreaterThan(-1);
  });

  it('should show message', (): void => {
    fixture.detectChanges();
    const element = fixture.nativeElement;
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.alertcontent').textContent).toContain('This is a success notification!!');
  });
});
