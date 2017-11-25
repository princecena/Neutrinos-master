import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';

// Plugins
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { Network } from '@ionic-native/network';
import { Device } from '@ionic-native/device';

// Pages
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { BucketsPage } from '../pages/buckets/buckets';
import { BucketinstrumentsPage } from '../pages/bucketinstruments/bucketinstruments';
import { InstrumentdetailsPage } from '../pages/instrumentdetails/instrumentdetails';
import { HeaderPage } from '../pages/header/header';

// Components
import { ExpandableHeader } from '../components/expandable-header/expandable-header';
import { MaplocationComponent } from '../components/maplocation/maplocation';
import { BucketTileComponent } from '../components/bucket-tile/bucket-tile';
import { InstrumentTileComponent } from '../components/instrument-tile/instrument-tile';

// Providers
import { ConnectivityProvider } from '../providers/connectivity/connectivity';
import { SocketProvider } from '../providers/socket/socket';
import { UtilityProvider } from '../providers/utility/utility';
import { LoginProvider } from '../providers/login/login';
import { RoundPipe } from '../pipes/round/round';
import { UsersProvider } from '../providers/users/users';
import { MonthyrPipe } from '../pipes/monthyr/monthyr';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    BucketsPage,
    BucketinstrumentsPage,
    InstrumentdetailsPage,
    HeaderPage,
    ExpandableHeader,
    MaplocationComponent,
    BucketTileComponent,
    InstrumentTileComponent,
    RoundPipe,
    MonthyrPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    BucketsPage,
    BucketinstrumentsPage,
    InstrumentdetailsPage,
    HeaderPage
   ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Network,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConnectivityProvider,
    SocketProvider,
    UtilityProvider,
    Device,
    LoginProvider,
    UsersProvider
  ]
})
export class AppModule {}
