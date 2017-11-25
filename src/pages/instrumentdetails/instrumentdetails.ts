import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Instrument } from '../../models/instrument.model';

/**
 * Generated class for the InstrumentdetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-instrumentdetails',
  templateUrl: 'instrumentdetails.html',
})
export class InstrumentdetailsPage {

  instrument : Instrument;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.instrument = this.navParams.get("data");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InstrumentdetailsPage');
  }

}
