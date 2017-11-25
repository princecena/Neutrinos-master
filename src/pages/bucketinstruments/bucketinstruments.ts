import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the BucketinstrumentsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-bucketinstruments',
  templateUrl: 'bucketinstruments.html',
})
export class BucketinstrumentsPage {

  constructor
  (
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController,
  ) {
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BucketinstrumentsPage');
  }

  showSlider() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Select the Amount');

    alert.addInput({
      type: "range",
      min: 0,
      max: 60,
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
      }
    });
    alert.present();
  }

  showcheckbox() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Select Bank');

    alert.addInput({
      type: 'checkbox',
      label: 'State Bank Of India',
      value: 'sbi',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Bank of Baroda',
      value: 'bob',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Citi Bank',
      value: 'citi',
      checked: true
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
      }
    });
    alert.present();
  }

}
