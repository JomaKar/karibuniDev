import { Injectable } from '@angular/core';

@Injectable()
export class windowService{

	outerWidthOutput(){
		return window.innerWidth;
	}

	innerWidthOutput(){
		return window.outerWidth;
	}

}