import { Component, OnInit } from '@angular/core';
import { AlertBoxService } from '../services/alertbox.service';
import { AlertType } from '../models/alertconfig';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass']
})
export class HomepageComponent {

  constructor(private alertService: AlertBoxService) { }

  callAlertService(message: string) {
    const target = event.target as HTMLTextAreaElement;
    switch (target.id) {
      case 'success-alert':
        this.alertService.callAlertType(AlertType.Success, message, target.id);
        break;
      case 'error-alert':
        this.alertService.callAlertType(AlertType.Error, message, target.id);
        break;
      case 'information-alert':
        this.alertService.callAlertType(AlertType.Info, message, target.id);
        break;
      case 'warning-alert':
        this.alertService.callAlertType(AlertType.Warning, message, target.id);
        break;
    }
  }
}
