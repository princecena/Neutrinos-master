import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { UserDefaults,Users } from '../../models/users.model';

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UsersProvider {

  userDefault: UserDefaults;

  constructor(public http: Http) {
    console.log('Hello UsersProvider Provider');
  }

}
