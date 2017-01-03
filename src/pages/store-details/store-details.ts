import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

/*
  Generated class for the StoreDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-store-details',
  templateUrl: 'store-details.html'
})
export class StoreDetailsPage {
  selectedStore: any;
  items: FirebaseListObservable<any[]>;
  stores: FirebaseListObservable<any[]>;
  itemName: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              af: AngularFire) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedStore = navParams.get('item');
    var url = '/commonStores/'+this.selectedStore;
    this.items = af.database.list(url);
    this.stores = af.database.list('/commonStores');
    console.log(this.items);
  }

  addItem() {
    console.log('name of new item to persist: ' + this.itemName);

    this.items.push(this.itemName);
  }

  clearList() {
    console.log('removing items from ' + this.selectedStore);
    //todo: archieve the list of items purchased before removing from UI

    this.items.remove();
    firebase.database().ref('/commonStores').child(this.selectedStore).set("null");
  }

  ionViewDidLoad() {
    console.log('Hello StoreDetailsPage Page');
  }

}
