import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class Toasts {
    constructor(public toastCtrl: ToastController) {
    }

    presentToast(message: string, duration?: number, position?: string,
        cssClass?: string, showCloseButton?: boolean, closeButtonText?: string,
        dismissOnPageChange?: boolean) {

        if (!duration) { duration = 3000; }
        if (!position) { position = 'top'; }
        if (!showCloseButton) { showCloseButton = false; }
        if (!closeButtonText) { closeButtonText = ''; }
        if (!cssClass) { cssClass = ''; }
        if (!dismissOnPageChange) { dismissOnPageChange = false; }

        let toast = this.toastCtrl.create({
            message: message,
            duration: duration,
            position: position,
            showCloseButton: showCloseButton,
            closeButtonText: closeButtonText,
            cssClass: cssClass,
            dismissOnPageChange: dismissOnPageChange
        });
        toast.present();
    }
}
