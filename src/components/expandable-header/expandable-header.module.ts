import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ExpandableHeader } from './expandable-header';

@NgModule({
  declarations: [
    ExpandableHeader,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    ExpandableHeader
  ]
})
export class ExpandableHeaderComponentModule {}
