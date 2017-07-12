import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'gallery-grid',
	templateUrl: 'galleryElement.tmp.html'
})


export class GalleryElement implements OnInit{
	@Input() elements: Array<Object>;
	areElements: boolean = true;
	imgStamp: string;

	constructor(private aRoute: ActivatedRoute){
		this.imgStamp = (window.location.host == 'jomakar.github.io') ? 'karibuniProd/' : '';
	}

	ngOnInit(){
		this.areElements = (this.elements !== null && this.elements !== undefined) ? true : false;
	}
}
