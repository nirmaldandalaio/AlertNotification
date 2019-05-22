import { Component, OnInit, Input } from '@angular/core';
import { Alert, AlertType } from '../models/alert';
import { AlertBoxService } from '../services/alertbox.service';

@Component({
  selector: 'app-alertbox',
  templateUrl: './alertbox.component.html',
  styleUrls: ['./alertbox.component.sass']
})
export class AlertBoxComponent implements OnInit {
  @Input() id: string;
  alerts: Alert[] = [];

  constructor(private alertService: AlertBoxService) { } // Injecting the alert service into the component.

  // Subscribes to the getAlert method in the Alert Service
  ngOnInit() {
    this.alertService.getAlert('001').subscribe((alert: Alert) => {
      if (!alert.message) {
          // clear alerts when message is empty
          this.alerts = [];
          return;
      }

      // push new alert to the array
      this.alerts.push(alert);
    });
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
