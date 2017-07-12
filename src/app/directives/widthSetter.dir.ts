import { Directive, ElementRef, Renderer, Input, OnInit, HostBinding } from '@angular/core'

@Directive({
	selector: '[widthSetter]'
})

export class widthSetterDirective implements OnInit{
	@Input() widthSetter: number;

	constructor(private elR: ElementRef, private ren: Renderer){
	}

	ngOnInit(){
		// console.log('back', this.backImg);
		this.ren.setElementStyle(this.elR.nativeElement, 'width', `${this.widthSetter}%`);
	}


}