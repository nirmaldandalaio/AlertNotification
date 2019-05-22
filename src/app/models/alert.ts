export class Alert {
    type: AlertType;
    message: string;
    alertId: string;

    constructor(alert?: Partial<Alert>) {
        Object.assign(this, alert);
    }
}

export enum AlertType {
    Success,
    Error,
    Info,
    Warning
}
