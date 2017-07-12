import { Routes } from '@angular/router';

import { shopAboutSection } from '../shopSection/shopAbout/shopAbout.cmp';
import { shopGallerySection } from '../shopSection/shopGallery/shopGallery.cmp';

export const shopRoutes: Routes = [
	{ path: 'about', component:  shopAboutSection},
	{ path: 'gallery', component:  shopGallerySection }
];

