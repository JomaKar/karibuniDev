import { Component, ElementRef, OnInit, ViewChild, Renderer } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ElementsService } from '../../services/individualElementsService.srv';


@Component({
	moduleId: module.id,
	selector: 'location-singular',
	templateUrl: 'location.tmp.html'
})


export class IndividualLocation implements OnInit{
	location: Object;
	images: Array<string> = [];
	locationInfo: Object;
	areImages: boolean = false;
	itmWidth: number;
	imgStamp: string;


	parkingInfo: Object; 
	productionInfo: Object; 

	@ViewChild('fullImgList') fullImgList: ElementRef;

	constructor(private eSer: ElementsService, private aRoute: ActivatedRoute, private render: Renderer){
		this.imgStamp = (window.location.host == 'jomakar.github.io') ? 'karibuniProd/' : '';
	}

	ngOnInit(){
		this.aRoute.params.subscribe((param: any) => this.getLocationObject(+param.id));
	}

	getLocationObject(id: number){
		this.location = this.eSer.getElement('loc', id)[0];
		this.images = this.location['info']['images'];
		this.locationInfo = this.location['info'];
		this.parkingInfo = this.locationInfo['parkingSpace'];
		this.productionInfo = this.locationInfo['productionFacilities'];
		this.displayImgs();
	}

	displayImgs(){
		let itmsNumber = this.images.length;
		let listWidth = itmsNumber * 100;
		this.itmWidth = 100/itmsNumber;

		this.render.setElementStyle(this.fullImgList.nativeElement, 'width', `${listWidth}%`);


		this.areImages = true;
		
		console.log(this.location, this.images);
	}


}
