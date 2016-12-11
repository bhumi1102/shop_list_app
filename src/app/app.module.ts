import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { BrowserModule } from '@angular/platform-browser';

import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { StoreListPagePage } from '../pages/store-list-page/store-list-page';
import { StoreDetailsPage } from '../pages/store-details/store-details';

export const firebaseConfig = {
  apiKey: "AIzaSyD5p5sy4ACcjimX6sPwARrKCDw1aF5rRic",
  authDomain: "shop-list-8f175.firebaseapp.com",
  databaseURL: "https://shop-list-8f175.firebaseio.com",
  storageBucket: "shop-list-8f175.appspot.com",
  messagingSenderId: "663897269423"
};

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    StoreListPagePage,
    StoreDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    StoreListPagePage,
    StoreDetailsPage
  ],
  providers: []
})
export class AppModule {}
