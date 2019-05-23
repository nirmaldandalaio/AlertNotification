import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

import { Alert, AlertType } from '../models/alertconfig';

@Injectable()
export class AlertBoxService {
    private subject = new Subject<Alert>();

    constructor() {
    }

    // subscribe to alerts
    getAlert(): Observable<any> {
        return this.subject;
    }

    callAlertType(alerttype: AlertType, message: string, id: string) {
        this.alert(new Alert({ message, type: alerttype, id }));
    }

    // main alert method
    alert(alert: Alert) {
        this.subject.next(alert);
    }
}
