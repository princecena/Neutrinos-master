import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstrumentdetailsPage } from './instrumentdetails';

@NgModule({
  declarations: [
    InstrumentdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(InstrumentdetailsPage),
  ],
  exports: [
    InstrumentdetailsPage
  ]
})
export class InstrumentdetailsPageModule {}
