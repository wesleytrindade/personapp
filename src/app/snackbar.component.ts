import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material';

@Injectable({
    providedIn: 'root'
})

export class Snackbar {
    constructor(private snackBar: MatSnackBar){}

    GenericAlert(arg: {message:string, actionButtonLabel:string}) {
        let config = new MatSnackBarConfig();
        let horizontalPosition: MatSnackBarHorizontalPosition = 'center';
        let verticalPosition: MatSnackBarVerticalPosition = 'bottom';

        const alertObj = {
            message: arg.message,
            actionButtonLabel: arg.actionButtonLabel,
            action: true,
            setAutoHide: true,
            autoHide: 5000
        }

        config.verticalPosition = verticalPosition;
        config.horizontalPosition = horizontalPosition;
        config.duration = alertObj.autoHide;        

        this.snackBar.open(alertObj.message, alertObj.action ? alertObj.actionButtonLabel : undefined, config);
    }
}