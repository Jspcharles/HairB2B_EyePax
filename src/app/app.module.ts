import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ClickOutsideModule} from 'ng-click-outside';
import {AppComponent} from './app.component';
import {SliderComponent} from './slider/slider.component';
import {HeaderComponent} from './header/header.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {HomePageComponent} from './home-page/home-page.component';
import {SearchComponent} from './search/search.component';
import {FooterComponent} from './footer/footer.component';
import {HomePageCoverComponent} from './home-page-cover/home-page-cover.component';
import {HomePageContentComponent} from './home-page-content/home-page-content.component';
import {SearchResultsComponent} from './search-results/search-results.component';
import {RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HairstylistProfileComponent } from './hairstylist-profile/hairstylist-profile.component';
import { CalendarComponent } from './calendar/calendar.component';
import {Ng2CarouselamosModule} from 'ng2-carouselamos';
import { TestAlComponent } from './test-al/test-al.component';


const routes: Routes = [
  {
    path : '', component : HomePageComponent
  },
  {
    path: 'search', component: SearchResultsComponent
  },
  {
    path: 'hairstylist-pro', component: HairstylistProfileComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HeaderComponent,
    SignInComponent,
    HomePageComponent,
    SearchComponent,
    FooterComponent,
    HomePageCoverComponent,
    HomePageContentComponent,
    SearchResultsComponent,
    SignUpComponent,
    HairstylistProfileComponent,
    CalendarComponent,
    TestAlComponent,
  ],
  imports: [
    BrowserModule, ClickOutsideModule,
    RouterModule.forRoot(routes),
    Ng2CarouselamosModule
  ],
  providers: [ { provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
