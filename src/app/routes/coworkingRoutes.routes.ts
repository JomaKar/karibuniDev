import { Routes } from '@angular/router';

import { coworkingAboutSection } from '../coworkingSection/coworkingAbout/coworkingAbout.cmp';
import { coworkingGallerySection } from '../coworkingSection/coworkingGallery/coworkingGallery.cmp';

export const coworkingRoutes: Routes = [
	{ path: 'about', component:  coworkingAboutSection},
	{ path: 'gallery', component:  coworkingGallerySection }
];

