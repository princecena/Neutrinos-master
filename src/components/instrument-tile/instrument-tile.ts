import { Component,Input } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { Instrument } from '../../models/instrument.model';

import { InstrumentdetailsPage } from '../../pages/instrumentdetails/instrumentdetails';


@Component({
  selector: 'instrument-tile',
  templateUrl: 'instrument-tile.html'
})
export class InstrumentTileComponent {

    @Input() navigateEnabled : boolean = true;
    @Input() instrument: Instrument;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InstrumentPage');
  }

  instrumentDetails() {
    if(this.navigateEnabled) {
      this.navCtrl.push(InstrumentdetailsPage,{data: this.instrument});
    }
  }
}
