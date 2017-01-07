import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

//todo: remove once confirm not used
@Injectable()
export class StoreDataService {
  data: Array<string>

  constructor(public http: Http) {
    console.log('Hello StoreDataService Provider---------');
  }

  fetchStoreData(){
    return this.http.get('https://shop-list-8f175.firebaseio.com/.json').map(
      (res) => res.json()
    ).subscribe(
      (data) => console.log(data)
    );
  }

  loadStoreData(){
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      this.http.get('https://shop-list-8f175.firebaseio.com/.json')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data.commonStores;
          resolve(this.data);
        });
    });
  }

}
