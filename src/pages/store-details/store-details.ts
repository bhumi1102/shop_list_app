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
  selectedItem: any;
  items: FirebaseListObservable<any[]>;
  itemName: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              af: AngularFire) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    var url = '/commonStores/'+this.selectedItem;
    console.log(url);
    this.items = af.database.list(url);
    console.log(this.items);
  }

  createStore($event, item) {
    console.log('name of new store to persist: ' + this.itemName);

    this.items.push(this.itemName);
  }

  ionViewDidLoad() {
    console.log('Hello StoreDetailsPage Page');
  }

}
