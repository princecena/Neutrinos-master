import { Injectable,NgZone } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as io from "socket.io-client"; 
import { Observable } from 'rxjs/Observable';
import { UtilityProvider } from '../utility/utility';

@Injectable()
export class SocketProvider {

    socket:any;
    zone:any;
    ipaddress: string;
    requestArray : Array<[string,Observable<any>]>;

    static get parameters() {
      return [NgZone];
    }

    constructor
    (ngzone,
     public http: Http,
     public utilService: UtilityProvider
    ) {
      console.log('Hello SocketProvider Provider');
      this.zone = ngzone;
    }

    //creating a fresh socket connection
    socketConnect(access_token: string,ipaddress: string): Observable<any> {
        this.ipaddress = ipaddress;

        let socketUrl =  'http://' + ipaddress + '/fimmi';

        console.log(socketUrl);

        let observable = new Observable(observer => {
            this.socket = io.connect(socketUrl);
            var __this  = this;
            this.socket.on('connect', () => {
                this.zone.run(() => {
                    console.log("Socket connection established");
                    this.socket.emit('authorize', {req_id: "_socketconn", token: access_token});
                });
    
                this.socket.on('disconnect', () => {
                    this.zone.run(() => {
                        console.log("Socket disconnected");
                    });
                });
        
                this.socket.on('connect_timeout',() => {
                    this.zone.run(() => {
                        console.log("Socket connection timeout");
                    });
                });
            });
    
            this.socket.on('authorize', function(data) {
                console.log("auth");
                console.log('authorize: ' + JSON.stringify(data)); 
                __this.socket.emit('user', {req_id: "_userDefaults", req_type: 'getuserdefaults', fields :'amount, tenure, tax_rate, is_senior'});
            });
    
            __this.socket.on('user', function(data) {
                console.log('user: ' + JSON.stringify(data));
                observer.next(data);
            });
        }).catch(
                (error: Response) => {
                    return Observable.throw('Something went wrong in the response');
                }
          );   

        return observable;
    }


    //split header from data
    sendSocketEventRequest(requestName:string,eventName: string,data: any): Observable<any> {

        //not in this version
        //let requestId = this.generateRequestId(requestName);
        //console.log("emitting to socket : " + eventName + "," + JSON.stringify(data) + "," + requestId);

        console.log("emitting to socket : " + eventName + "," + JSON.stringify(data));

        let observable = new Observable(observer => {
            this.socket.emit(eventName, data);
            this.socket.on(eventName, function(data) {
                console.log(eventName + ": " + JSON.stringify(data));
                observer.next(data); 
            });
        });
        
        //this.requestArray.push([requestId,observable]);
        return observable;   
    }

    //generating request id
    generateRequestId(requestName: string): string {
        return this.utilService.getDeviceId() + '_' + requestName + '_' + new Date().toLocaleString();
    }  

}
