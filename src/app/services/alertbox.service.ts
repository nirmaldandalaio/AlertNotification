import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

import { Alert, AlertType } from '../models/alert';

@Injectable()
export class AlertBoxService {
    private subject = new Subject<Alert>();

    constructor() {
    }

    // subscribe to alerts
    getAlert(alertId?: string): Observable<any> {
        return this.subject;
    }

    callAlertType(alerttype: AlertType, message: string) {
        this.alert(new Alert({ message, type: alerttype }));
    }

    // main alert method
    alert(alert: Alert) {
        this.subject.next(alert);
    }

    // clear alerts
    clear(alertId?: string) {
        this.subject.next(new Alert({ alertId }));
    }
}