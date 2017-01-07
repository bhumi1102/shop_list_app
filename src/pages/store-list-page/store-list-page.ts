import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { StoreDataService } from '../../providers/store-data-service';
import { StoreDetailsPage } from '../store-details/store-details';
declare var firebase: any;

@Component({
  selector: 'page-store-list-page',
  templateUrl: 'store-list-page.html',
  providers: [StoreDataService]
})
export class StoreListPagePage {
  stores: FirebaseListObservable<any[]>;
  storeName: string

  constructor(public navCtrl: NavController, 
              public storeDataService: StoreDataService,
              af: AngularFire) {
    
    this.stores = af.database.list('/commonStores');
  }

  storeSelected(event, item) {
    this.navCtrl.push(StoreDetailsPage, {
      item: item
    });
    console.log('some store selected: ' + item);
  }

  createStore() {
    console.log('name of new store to persist: ' + this.storeName);
    firebase.database().ref('/commonStores').child(this.storeName).set("null");
  }

}
