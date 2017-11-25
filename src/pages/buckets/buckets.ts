import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Bucket } from '../../models/bucket.model';
import { Instrument } from '../../models/instrument.model';

/**
 * Generated class for the BucketsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-buckets',
  templateUrl: 'buckets.html',
})
export class BucketsPage {

      bestInstruments: Instrument[];
      bucketList: Bucket[] = [
        {
          instruments: 350,
          claimedReturnPer: 20,
          netReturnPer: 18,
          instimg: "assets/bank.png"
        },
        {
          instruments: 86,
          claimedReturnPer: 17,
          netReturnPer: 15,
          instimg: "assets/govt.png"
        },
        {
          instruments: 104,
          claimedReturnPer: 20,
          netReturnPer: 17,
          instimg: "assets/corp.png"
        },
        {
          instruments: 36,
          claimedReturnPer: 17,
          netReturnPer: 16,
          instimg: "assets/post.png"
        }
      ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.bestInstruments = JSON.parse(this.navParams.get("data"));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BucketsPage');
    console.log(this.bestInstruments);
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave BucketsPage');
  }

  ionViewWillUnload() {
    console.log('ionViewWillUnload BucketsPage');
  }


}
