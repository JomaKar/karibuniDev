import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
	moduleId: module.id,
	selector: 'workshop-about',
	templateUrl: 'workshopAbout.tmp.html'
})


export class WorkshopAboutSection implements OnInit{
	workshopAbout: Object = {
		localTitle: 'This is the workshop title',
		localSubtitle: 'this is a prettye nice subtitle',
		localText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem pariatur eum eveniet deleniti quidem eius assumenda, delectus, suscipit placeat error necessitatibus inventore eligendi excepturi, iusto, corrupti aliquid. Maiores, sequi, iusto.'
	};

	workshopAboutImg: string;
	folder: string;

	constructor(private aRoute: ActivatedRoute){
		this.folder = aRoute.parent.snapshot.url.toString();
	}

	ngOnInit(){
		this.workshopAboutImg = (window.location.host == 'jomakar.github.io') ? `karibuniProd/assets/${this.folder}/aboutMain.jpg` : `assets/${this.folder}/aboutMain.jpg`;
	}

}
