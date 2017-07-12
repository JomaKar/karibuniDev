import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';


import { WorkshopContainer } from './workshopSection/workshopContainer.cmp';
import { workshopRoutes } from './routes/workshopRoutes.routes';
import { WorkshopAboutSection } from './workshopSection/workshopAbout/workshopAbout.cmp';

import { ShopContainer } from './shopSection/shopContainer.cmp';
import { shopRoutes } from './routes/shopRoutes.routes';
import { shopAboutSection } from './shopSection/shopAbout/shopAbout.cmp';

import { LocationContainer } from './locationSection/locationContainer.cmp';
import { LocationAboutSection } from './locationSection/locationAbout/locationAbout.cmp';
import { locationRoutes } from './routes/locationRoutes.routes';

import { CoworkingContainer } from './coworkingSection/coworkingContainer.cmp';
import { coworkingRoutes } from './routes/coworkingRoutes.routes';
import { coworkingAboutSection } from './coworkingSection/coworkingAbout/coworkingAbout.cmp';

import { HomeContainer } from './homeSection/homeContainer.cmp';
import { AboutContainer } from './aboutSection/aboutContainer.cmp';

const routes: Routes = [
	{ path: '', component: HomeContainer, pathMatch: 'full' },
	{ path: 'home', component:  HomeContainer},
	{ path: 'locations', pathMatch: 'full', redirectTo: 'locations/about'},
	{ path: 'locations', component:  LocationContainer, children: locationRoutes},
	{ path: 'about', component: AboutContainer},
	{ path: 'shop', pathMatch: 'full', redirectTo: 'shop/about'},
	{ path: 'shop', component: ShopContainer, children: shopRoutes},
	{ path: 'coworking', pathMatch: 'full', redirectTo: 'coworking/about'},
	{ path: 'coworking', component: CoworkingContainer, children: coworkingRoutes},
	{ path: 'workshop', pathMatch: 'full', redirectTo: 'workshop/about' },
	{ path: 'workshop', component: WorkshopContainer, children: workshopRoutes}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRouterModule{}

