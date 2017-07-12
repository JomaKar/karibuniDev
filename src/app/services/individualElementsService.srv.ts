import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { locations } from './info/locationGalleryInfo.info';

@Injectable()
export class ElementsService{

	private locationElements = locations;

	private getUrl = 'http://localhost/karibuniBack/read.php';
	private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8', 'Access-Control-Allow-Origin': '*'});

	constructor(private http: Http){}

	getElement(type: string, id: number){
		if(type === 'loc') return this.locationElements.filter(location => location.id === id);
	}

	getItemsHttp(tbl, theId){
		let stringToSend = `db=${tbl}&id=${theId}`;
		return this.http.post(this.getUrl, stringToSend, {headers: this.headers});
	}

}