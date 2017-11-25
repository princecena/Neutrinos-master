import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,AlertController } from 'ionic-angular';
import { Users } from '../../models/users.model';
import { ToastController  } from 'ionic-angular';

// Providers
import { UtilityProvider } from '../../providers/utility/utility';
import { LoginProvider } from '../../providers/login/login';
import { SocketProvider } from '../../providers/socket/socket';
import { UsersProvider } from '../../providers/users/users';

// Pages
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

      userModel : Users;
      private access_token: string;
      private ip_address: string;

    
      constructor(
        public navCtrl: NavController, 
        public navParams: NavParams, 
        public loadingCtrl: LoadingController,
        public alertCtrl: AlertController,
        public toastCtrl: ToastController,
        public loginService: LoginProvider,
        public utilService: UtilityProvider,
        public socketService : SocketProvider,
        public usersService: UsersProvider
      ) {
          //if the storage value exist...login automatically
      }
    
      ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
      }

      // register the user for first time
      loginUser(mobileNumber = '', emailId = '') {
            //storing the details in the users model
            this.userModel = {
              "mobile": mobileNumber,
              "email": emailId            
            }

            let loading = this.loadingCtrl.create({
              content: 'Signin In...'
            });
            loading.present();
            this.utilService.setStorageValue('Mobile',mobileNumber);
            this.utilService.setStorageValue('Email',emailId);

            this.utilService.getDataFromRestCall(
                'http://103.72.8.167:8002/enter',
                {"mobile":mobileNumber,"email_id":emailId,"client_type":"android"}
            )
            .subscribe(
                (response: any) => {
                    console.log(response.headers);
                    let res = response.json();
                    if(res.success) {
                        this.access_token = response.headers.get('access_token');
                        this.utilService.setStorageValue('access_token', this.access_token);
                        console.log("response: " + this.access_token);
                        this.ip_address = response.headers.get('ip_address');
                        console.log("response: " + this.ip_address);
                        let observable = this.socketService.socketConnect(this.access_token, this.ip_address);

                        observable.subscribe(message => {
                                console.log(JSON.stringify(message));
                                loading.dismiss();
                                if(message.success) {
                                    this.usersService.userDefault = message.response;
                                    this.navCtrl.setRoot(HomePage);
                                } else {
                                    this.presentToast('User Initialization failed');
                                }
                            },
                            (error) => {
                                loading.dismiss();
                                this.presentToast('Socket connection failed');
                        })
                    } else {
                        loading.dismiss();
                        console.log("Failure Reason: " + res.reason);
                        this.presentToast(res.reason);
                    }
                },
                (error) => {
                    loading.dismiss();
                    this.presentToast('Something Went Wrong. Please try again!');
                }
            );
      }

      // Registered User
      registerUser(mobileNumberInput: HTMLInputElement, emailIdInput: HTMLInputElement) {this.loginUser(mobileNumberInput.value, emailIdInput.value)}

      // Guest User
      guestUser() {this.loginUser()}

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
