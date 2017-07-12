import { Component, ElementRef, Renderer, ViewChild } from '@angular/core';
import { windowService } from '../services/windowService.srv';

@Component({
	moduleId: module.id,
	selector: 'my-navbar',
	templateUrl: 'navbar.tmp.html'
})


export class NavbarComponent {
	@ViewChild('navbarMenu') navbarMenu: ElementRef;

	dropDowned: boolean = false;

	constructor(private render: Renderer, private wwS: windowService){}


	expressSize(){
		console.log('wO', this.wwS.outerWidthOutput());
		console.log('wI', this.wwS.innerWidthOutput());
	}

	displayMenu(){
		let wI = this.wwS.innerWidthOutput();
		if(wI < 845){
			console.log('you click');
			(!this.dropDowned) ? this.render.setElementClass(this.navbarMenu.nativeElement, 'in', true) : this.render.setElementClass(this.navbarMenu.nativeElement, 'in', false);
			this.dropDowned = !this.dropDowned;
		}
	}

}

