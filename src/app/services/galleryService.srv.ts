import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { locGalleryItems } from './info/locationGalleryInfo.info';

@Injectable()
export class GalleryService{

	private locationGalleryItems = locGalleryItems;

	private getUrl = 'http://localhost/karibuniBack/read.php';
	private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8', 'Access-Control-Allow-Origin': '*'});

	constructor(private http: Http){}

	getItems(locType){
		if(locType === 'loc') return this.locationGalleryItems;
	}

	getItemsHttp(tbl){
		let stringToSend = `db=${tbl}`;
		return this.http.post(this.getUrl, stringToSend, {headers: this.headers});
	}

}