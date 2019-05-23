import { Component, OnInit, Input, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Alert, AlertType } from '../models/alertconfig';
import { AlertBoxService } from '../services/alertbox.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alertbox',
  templateUrl: './alertbox.component.html',
  styleUrls: ['./alertbox.component.sass'],
  encapsulation: ViewEncapsulation.Native,
})
export class AlertBoxComponent implements OnInit, OnDestroy {
  @Input() id: string;
  private alertListener: Subscription;
  alerts: Alert[] = [];

  constructor(private alertService: AlertBoxService) { } // Injecting the alert service into the component.

  // Subscribes to the getAlert method in the Alert Service
  ngOnInit() {
    this.alertListener = this.alertService.getAlert().subscribe((alert: Alert) => {
      if (!alert.message) {
          // clear alerts when message is empty
          this.alerts = [];
          return;
      }

      // push new alert to the array
      this.alerts.push(alert);
    });
  }

  ngOnDestroy() {
    //Removes the subscriber
    if (this.alertListener) {
      this.alertListener.unsubscribe();
    }
  }

  // Called when user clicks on the close icon of the alert
  removeAlert(alert: Alert) {
    this.alerts = this.alerts.filter(x => x !== alert);
  }


  // Dynamic class based on the alert type
  getAlertBoxClass(alert: Alert) {
    if (!alert) {
      return;
    }

    switch (alert.type) {
      case AlertType.Success:
        return 'alert is-success';
      case AlertType.Error:
        return 'alert is-danger';
      case AlertType.Info:
        return 'alert is-info';
      case AlertType.Warning:
        return 'alert is-warning';
    }
  }

}
