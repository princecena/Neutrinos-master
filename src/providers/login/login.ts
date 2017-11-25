import { Injectable } from '@angular/core';
import { Headers,Http, Response, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

// Providers
import { UtilityProvider } from '../../providers/utility/utility';
import { SocketProvider } from '../../providers/socket/socket';

@Injectable()
export class LoginProvider {

  private url:string = 'http://103.72.8.167:8002/register';
  private access_token: string;
  private ip_address: string;
  
  constructor(private http: Http, public utilService: UtilityProvider, public socketService: SocketProvider) {
      console.log('Hello LoginProvider Provider');
  }

  loginAndGetToken(phone_no, password) {
      const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
      let urlSearchParams = new URLSearchParams();
      urlSearchParams.append('phone_no', phone_no);
      urlSearchParams.append('password', password);
      let body = urlSearchParams.toString();
      console.log("body:" + body);
      return this.http.post(this.url, body, {headers: headers}).catch(
          (error: Response) => {
            return Observable.throw('Something went wrong in the response');
          }
      );
  }
  
}
