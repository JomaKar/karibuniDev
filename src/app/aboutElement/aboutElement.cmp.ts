import { Component, Input, ViewChild, OnInit, ElementRef, Renderer } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { aboutInfo } from './aboutLocal.info';

@Component({
	moduleId: module.id,
	selector: 'about-element',
	templateUrl: 'aboutElement.tmp.html'
})


export class AboutElement implements OnInit{
	@Input() backImg: string = '';
	@Input() info: Object;

	private localInfo = aboutInfo;

	localTitle: string;
	localSubtitle: string;
	localText: string;

	aboutImg: string;
	folder: string;

	@ViewChild('localImgAbout') localImgAbout: ElementRef;

	constructor(private render: Renderer, private aRoute: ActivatedRoute){
		this.folder = aRoute.parent.snapshot.url.toString();
	}

	ngOnInit(){
		this.localTitle = this.info['localTitle'];
		this.localSubtitle = this.info['localSubtitle'];
		this.localText = this.info['localText'];
		if(this.backImg.length > 0){
			this.aboutImg = this.backImg;
		}else{
			this.aboutImg = (window.location.host == 'jomakar.github.io') ? `karibuniProd/assets/${this.folder}/aboutMain.jpg` : `assets/${this.folder}/aboutMain.jpg`;
		}
	}

}
