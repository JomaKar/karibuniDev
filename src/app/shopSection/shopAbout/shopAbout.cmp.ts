import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
	moduleId: module.id,
	selector: 'shop-about',
	templateUrl: 'shopAbout.tmp.html'
})


export class shopAboutSection {
	shopAboutInfo: Object = {
		localTitle: 'This is the shop title',
		localSubtitle: 'this is a prettye nice subtitle',
		localText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quam, quod hic quae, magnam aperiam rerum, necessitatibus in enim nam possimus. Vitae quo sit asperiores, obcaecati, facere assumenda odit veniam.'
	};


	shopAboutImg: string;
	folder: string;

	constructor(private aRoute: ActivatedRoute){
		this.folder = aRoute.parent.snapshot.url.toString();
	}

	ngOnInit(){
		this.shopAboutImg = (window.location.host == 'jomakar.github.io') ? `karibuniProd/assets/${this.folder}/aboutMain.jpg` : `assets/${this.folder}/aboutMain.jpg`;
	}

}
