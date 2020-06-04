import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Provider} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {registerLocaleData} from '@angular/common';
import ruLocail from '@angular/common/locales/ru-UA';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {HomePageComponent} from './home-page/home-page.component';
import {PostPageComponent} from './post-page/post-page.component';
import {CarComponent} from './shared/components/car/car.component';
import {SharedModule} from './shared/shared.module';
import {AuthInterceptor} from './shared/auth.interceptor';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CarouselComponent} from './shared/components/carousel/carousel.component';

import {AboutUsComponent} from './about-us/about-us.component';
import {CarServiceInfoComponent} from './shared/components/car-service-info/car-service-info.component';
import {AgmCoreModule} from '@agm/core';
import {SiteMapComponent} from './shared/components/site-map/site-map.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


registerLocaleData(ruLocail, 'ru')

const INTERSEPTOR_PROVIDER: Provider = {
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: AuthInterceptor
}

@NgModule({
    declarations: [
        AppComponent,
        MainLayoutComponent,
        HomePageComponent,
        PostPageComponent,
        CarComponent,
        CarouselComponent,
        CarServiceInfoComponent,
        AboutUsComponent,
        SiteMapComponent,
        ContactUsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        AgmCoreModule.forRoot({
            // please get your own API key here:
            // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
            apiKey: 'AIzaSyAFgM81Qz-SwfTzUsr4F51AgDj0HdN88CQ'
        })
    ],
    providers: [INTERSEPTOR_PROVIDER],
    bootstrap: [AppComponent]
})
export class AppModule {
}
