import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { InstrumentTileComponent } from './instrument-tile';

@NgModule({
  declarations: [
    InstrumentTileComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    InstrumentTileComponent
  ]
})
export class InstrumentTileComponentModule {}
