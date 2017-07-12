import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'location-about',
	templateUrl: 'locationAbout.tmp.html'
})


export class LocationAboutSection implements OnInit{
	aboutInfo: Object = {
		localTitle: 'This is the locations title',
		localSubtitle: 'this is a prettye nice subtitle',
		localText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, ea, illum. Commodi recusandae maiores et repellendus, sequi debitis distinctio expedita excepturi quis, laboriosam, id sint culpa. Quia consectetur veniam saepe!'
	};

	backgroundImage: string;
	folder: string;

	constructor(private aRoute: ActivatedRoute){
		this.folder = aRoute.parent.snapshot.url.toString();
	}

	ngOnInit(){
		this.backgroundImage = (window.location.host == 'jomakar.github.io') ? `karibuniProd/assets/${this.folder}/aboutMain.jpg` : `assets/${this.folder}/aboutMain.jpg`;
	}
}
