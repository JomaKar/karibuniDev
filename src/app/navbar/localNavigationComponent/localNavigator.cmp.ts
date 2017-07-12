import { Component } from '@angular/core';

@Component({
	selector: 'local-navigator',
	template: `
		<div class="navigation-section">
			<a class="btn btn-default innerNavigationBtn" routerLink="about">About</a>
			<a class="btn btn-default innerNavigationBtn" routerLink="gallery">Gallery</a>
		</div>
	`
})

export class LocalNavigatorStandard{}