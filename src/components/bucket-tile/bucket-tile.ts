import { Component,Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Bucket } from '../../models/bucket.model';

import { BucketinstrumentsPage } from '../../pages/bucketinstruments/bucketinstruments';

/**
 * Generated class for the BucketTileComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'bucket-tile',
  templateUrl: 'bucket-tile.html'
})
export class BucketTileComponent {

 @Input() bucket: Bucket;


    // bucket: Bucket = {
    //   instruments: 350,
    //   claimedReturnPer: 20,
    //   netReturnPer: 18,
    //   instimg: "assets/bank.png"
    // };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BucketTilePage');
  }

  bucketInstruments () {
    this.navCtrl.push(BucketinstrumentsPage);
  }
}
