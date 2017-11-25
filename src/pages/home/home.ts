import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

import { BucketsPage } from '../buckets/buckets';
import { SocketProvider } from '../../providers/socket/socket';
import { UsersProvider } from '../../providers/users/users';
import { UserDefaults } from '../../models/users.model';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  userDefault: UserDefaults;
  tenure: number;
  amount: number;
  tax_rate: number;
  subscription: Subscription;



  constructor(
    public navCtrl: NavController, 
    private loadingCtrl: LoadingController,
    public navParams: NavParams,
    public socketService: SocketProvider,
    public usersService: UsersProvider,
    public toastCtrl: ToastController
  ) {      
      console.log('constructor HomePage');
      this.tenure = this.usersService.userDefault.tenure * 12;
      this.amount = this.usersService.userDefault.amount;
      this.tax_rate = this.usersService.userDefault.tax_rate;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave HomePage');
  }

  ionViewWillUnload() {
    console.log('ionViewWillUnload HomePage');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave HomePage');
    if(this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }

  findInstruments() {

    console.log("find Instruments");

    //Calling the socket service to send request to the server
    var observable = this.socketService.sendSocketEventRequest
                    ( 'bucket',
                      'instrument',
                      {  req_id: '_getbest',
                         req_type: 'getbest',
                         inv_amount : this.amount,
                         inv_time: this.tenure / 12,
                         threshold: 0.5,
                         inv_institution:'',
                         inv_assetclass: '',
                         max_results: 1,
                         tax_rate: this.tax_rate
                      }
                    );
     let loading = this.loadingCtrl.create({
          content: "Searching Best Instruments..."
        });
    
     loading.present();

     this.subscription = observable.subscribe(message => {
            console.log("subscribed instrument:" + JSON.stringify(message));
            loading.dismiss();
            if(message.success) {
                  this.navCtrl.push(BucketsPage,{data : JSON.stringify(message.response.instruments)});
            } else {
                this.presentToast('Failed to find Best Instrument');
            }
        },
        (error) => {
            loading.dismiss();
            console.log("error occured while getting the data from the server");
      });
  }

  // Toast Controller 
  presentToast(messageTxt: string) {
      let toast = this.toastCtrl.create({
        message: messageTxt,
        duration: 3000,
        position: 'bottom'
      });
    
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
    
      toast.present();
  }

}



