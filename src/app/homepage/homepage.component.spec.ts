import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageComponent } from './homepage.component';
import { AlertBoxService } from '../services/alertbox.service';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageComponent ],
      providers: [ AlertBoxService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check for button text', () => {
    // Running multiple test cases with a map instead of running them individually
    const bannerElement: HTMLElement = fixture.nativeElement;
    [
      {buttonid: 'success-alert', text: 'Success'},
      {buttonid: 'error-alert', text: 'Error'},
      {buttonid: 'information-alert', text: 'Information'},
      {buttonid: 'warning-alert', text: 'Warning'}
    ].forEach(t => {
      const button = bannerElement.querySelector(`#${t.buttonid}`);
      expect(button.textContent).toEqual(t.text);
    })
  })
});
