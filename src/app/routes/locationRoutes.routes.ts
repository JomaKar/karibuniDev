import { Routes } from '@angular/router';

import { LocationGallerySection } from '../locationSection/locationGallery/locationGallery.cmp';
import { LocationAboutSection } from '../locationSection/locationAbout/locationAbout.cmp';
import { IndividualLocation } from '../locationSection/locationSingular/location.cmp';

export const locationRoutes: Routes = [
	{ path: 'about', component:  LocationAboutSection},
	{ path: 'gallery', component:  LocationGallerySection},
	{ path: ':id', component: IndividualLocation }
];

