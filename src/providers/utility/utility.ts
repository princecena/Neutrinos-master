import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Headers,Http, Response, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Device } from '@ionic-native/device';


@Injectable()
export class UtilityProvider {
    
    private deviceId: string;

    constructor(private storage:Storage, private http:Http) {
        console.log('Hello UtilityProvider Provider');
        //this.deviceId = this.device.uuid;
        this.deviceId = '5843759347';
    }

    getStorageValue(key) {
        this.storage.get(key).then((val) => {console.log('Your' + key + 'is ', val);});
    }

    setStorageValue(key,value) {
        this.storage.set(key,value);
    }

    getDataFromRestCall(url:string,args:any) {
    
        const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
        let urlSearchParams = new URLSearchParams();

        for (const key of Object.keys(args)) {
            console.log(key + ": " + args[key]);
            urlSearchParams.append(key, args[key]);
        }
            
        //adding device id to the arguments before sending to the server
        urlSearchParams.append("device_id", this.deviceId);
        urlSearchParams.append("req_id", "_login");

        let body = urlSearchParams.toString();
        console.log("body: " + body);
        return this.http.post(url, body, {headers: headers}).catch(
            (error: Response) => {
            return Observable.throw('Something went wrong in the response');
            }
        );
    }

    getDeviceId() : string {
        return this.deviceId;
    }

}

