export class Alert {
    type: AlertType;
    message: string;
    id: string;

    constructor(alert?: Alert) {
        Object.assign(this, alert);
    }
}

export enum AlertType {
    Success,
    Error,
    Info,
    Warning
}
