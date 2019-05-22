import { Component, OnInit } from '@angular/core';
import { AlertBoxService } from '../services/alertbox.service';
import { AlertType } from '../models/alert';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass']
})
export class HomepageComponent {

  constructor(private alertService: AlertBoxService) { }

  success(message: string) {
    this.alertService.callAlertType(AlertType.Success, message);
  }

  error(message: string) {
    this.alertService.callAlertType(AlertType.Error, message);
  }

  information(message: string) {
      this.alertService.callAlertType(AlertType.Info, message);
  }

  warning(message: string) {
    this.alertService.callAlertType(AlertType.Warning, message);
  }

  clear() {
    this.alertService.clear();
}
}
