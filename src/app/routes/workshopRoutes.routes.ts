import { Routes } from '@angular/router';

import { WorkshopAboutSection } from '../workshopSection/workshopAbout/workshopAbout.cmp';
import { workshopGallerySection } from '../workshopSection/workshopGallery/workshopGallery.cmp';

export const workshopRoutes: Routes = [
	{ path: 'about', component:  WorkshopAboutSection },
	{ path: 'gallery', component:  workshopGallerySection }
];

