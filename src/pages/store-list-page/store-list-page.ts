import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StoreDataService } from '../../providers/store-data-service';
import { StoreDetailsPage } from '../store-details/store-details';
declare var firebase: any;

/*
  Generated class for the StoreListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-store-list-page',
  templateUrl: 'store-list-page.html',
  providers: [StoreDataService]
})
export class StoreListPagePage {
  stores: Array<string>
  storeName: string

  constructor(public navCtrl: NavController, 
              public storeDataService: StoreDataService) {
    
    //todo: add list of stores from firebase api here as the menu items in 'pages' variable
    this.storeDataService.loadStoreData().then(
      (data) => {
        this.stores = data;
        console.log(this.stores);
      });

    // firebase.database().ref('/commonStores').on('child_added', (snapshot) => {
    //   this.stores.push(snapshot.val());
    // });
  }

  storeSelected(event, item) {
    this.navCtrl.push(StoreDetailsPage, {
      item: item
    });
    console.log('some store selected' + item);
  }

  createStore($event, item) {
    console.log('name of new store to persist: ' + this.storeName);

    // var newChildRef = firebase.database().ref('/commonStores').push();
    // console.log('new id is:' + newChildRef.key);
    var index = this.stores.length    
    firebase.database().ref("/commonStores/"+index).set(this.storeName);
    //subscribe to child_added event to update the store list view
    // firebase.database().ref('/commonStores').on('child_added', (snapshot) => {
    //   this.stores.push(snapshot.val());
    // });
  }

  ionViewDidLoad() {
    console.log('Hello StoreListPagePage Page');
  }

}
