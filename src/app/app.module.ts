import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { windowService } from './services/windowService.srv';
import { GalleryService } from './services/galleryService.srv';
import { ElementsService } from './services/individualElementsService.srv';
import { gridItemHeightService } from './services/regularGridItemHeightService.srv';

import { ItemGalleryHeightDirective } from './directives/galleryItemHeight.dir';
import { BackgroundImageDirective } from './directives/backImgDir.dir';
import { widthSetterDirective } from './directives/widthSetter.dir';

import { AppRouterModule } from './appRouter.module';

import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.cmp';
import { LocalNavigatorStandard } from './navbar/localNavigationComponent/localNavigator.cmp';

import { GalleryElement } from './galleryElement/galleryElement.cmp';
import { DetailElement } from './detailElement/detailElement.cmp';
import { CarouselElement } from './carousel/carouselElement.cmp';
import { AboutElement } from './aboutElement/aboutElement.cmp';

import { WorkshopContainer } from './workshopSection/workshopContainer.cmp';
import { WorkshopAboutSection } from './workshopSection/workshopAbout/workshopAbout.cmp';
import { workshopGallerySection } from './workshopSection/workshopGallery/workshopGallery.cmp';

import { ShopContainer } from './shopSection/shopContainer.cmp';
import { shopAboutSection } from './shopSection/shopAbout/shopAbout.cmp';
import { shopGallerySection } from './shopSection/shopGallery/shopGallery.cmp';

import { LocationContainer } from './locationSection/locationContainer.cmp';
import { LocationGallerySection } from './locationSection/locationGallery/locationGallery.cmp';
import { LocationAboutSection } from './locationSection/locationAbout/locationAbout.cmp';
import { IndividualLocation } from './locationSection/locationSingular/location.cmp';

import { HomeContainer } from './homeSection/homeContainer.cmp';

import { CoworkingContainer } from './coworkingSection/coworkingContainer.cmp';
import { coworkingAboutSection } from './coworkingSection/coworkingAbout/coworkingAbout.cmp';
import { coworkingGallerySection } from './coworkingSection/coworkingGallery/coworkingGallery.cmp';


import { AboutContainer } from './aboutSection/aboutContainer.cmp';


import { CostumeIcon } from './icons/costume.cmp';
import { MakeupIcon } from './icons/makeup.cmp';
import { WaterCloseIcon } from './icons/wc.cmp';
import { janeinIcon } from './icons/booleanIcon.cmp';
import { DistanceIcon } from './icons/distanceIcon.cmp';
import { FloorIcon } from './icons/floorIcon.cmp';

@NgModule({
  declarations: [
    ItemGalleryHeightDirective,
    BackgroundImageDirective,
    widthSetterDirective,
    AppComponent,
    NavbarComponent,
    LocalNavigatorStandard,
    GalleryElement,
    CarouselElement,
    DetailElement,
    AboutElement,
    WorkshopContainer,
    WorkshopAboutSection,
    workshopGallerySection,
    ShopContainer,
    shopAboutSection,
    shopGallerySection,
    LocationContainer,
    LocationGallerySection,
    LocationAboutSection,
    IndividualLocation,
    HomeContainer,
    CoworkingContainer,
    coworkingAboutSection,
    coworkingGallerySection,
    AboutContainer,
    CostumeIcon,
    MakeupIcon,
    WaterCloseIcon,
    janeinIcon,
    DistanceIcon,
    FloorIcon
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule
  ],
  providers: [
    windowService,
    GalleryService,
    ElementsService,
    gridItemHeightService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
