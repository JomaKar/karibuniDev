import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
	moduleId: module.id,
	selector: 'coworking-about',
	templateUrl: 'coworkingAbout.tmp.html'
})


export class coworkingAboutSection implements OnInit{
	infoAboutCoworking: Object = {
		localTitle: 'This is the coworking title',
		localSubtitle: 'this is a prettye nice subtitle',
		localText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium expedita assumenda consequuntur dolorem delectus soluta quod similique, atque adipisci sunt ea enim corporis mollitia ipsum ipsa debitis cupiditate ducimus. Nisi.'
	};

	coworkingAboutImg: string;
	folder: string;

	constructor(private aRoute: ActivatedRoute){
		this.folder = aRoute.parent.snapshot.url.toString();
	}

	ngOnInit(){
		this.coworkingAboutImg = (window.location.host == 'jomakar.github.io') ? `karibuniProd/assets/${this.folder}/aboutMain.jpg` : `assets/${this.folder}/aboutMain.jpg`;
	}

}
