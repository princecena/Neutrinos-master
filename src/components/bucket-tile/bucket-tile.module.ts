import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { BucketTileComponent } from './bucket-tile';

@NgModule({
  declarations: [
    BucketTileComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    BucketTileComponent
  ]
})
export class BucketTileComponentModule {}
