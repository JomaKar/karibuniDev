import { Component, Input } from '@angular/core';

@Component({
	selector: 'janein-icon',
	template: `
		<i class="fa fa-check iconElement jaNeinIcon" aria-hidden="true" *ngIf="ja"></i>
		<i class="fa fa-times iconElement jaNeinIcon" aria-hidden="true" *ngIf="!ja"></i>
	`
})

export class janeinIcon{
	@Input() ja: boolean = false;
}