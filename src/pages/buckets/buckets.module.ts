import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BucketsPage } from './buckets';

@NgModule({
  declarations: [
    BucketsPage,
  ],
  imports: [
    IonicPageModule.forChild(BucketsPage)
  ],
  exports: [
    BucketsPage
  ]
})
export class BucketsPageModule {}
