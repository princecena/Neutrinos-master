import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BucketinstrumentsPage } from './bucketinstruments';

@NgModule({
  declarations: [
    BucketinstrumentsPage,
  ],
  imports: [
    IonicPageModule.forChild(BucketinstrumentsPage),
  ],
  exports: [
    BucketinstrumentsPage
  ]
})
export class BucketinstrumentsPageModule {}
