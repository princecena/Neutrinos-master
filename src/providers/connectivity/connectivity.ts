import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';
import { Platform } from 'ionic-angular';

//declare var Connection;

@Injectable()
export class ConnectivityProvider {

    onDevice: boolean;
    private connType: string[] = ['none','unknown'];
   
    constructor(public platform: Platform,public network: Network) {
         console.log('Hello ConnectivityProvider Provider');
        this.onDevice = this.platform.is('cordova');
    }
   
    isOnline(): boolean {
        if(this.onDevice) {
            if (this.connType.indexOf(this.network.type) == -1) {
                return true;
            } else {
                return false;
            }
        } else {
          return navigator.onLine; 
        }
    }
}
