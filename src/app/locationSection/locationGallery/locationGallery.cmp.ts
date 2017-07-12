import { Component, OnInit } from '@angular/core';


import { GalleryService } from '../../services/galleryService.srv';


@Component({
	moduleId: module.id,
	selector: 'location-gallery',
	templateUrl: 'locationGallery.tmp.html'
})


export class LocationGallerySection implements OnInit{
	locations: Object;

	constructor(private gSer: GalleryService){}

	ngOnInit(){
		this.locations = this.gSer.getItems('loc');
	}

}
