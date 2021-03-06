import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { BookingShowsComponent } from './booking-shows/booking-shows.component';
import { HairstylistProfilePicsComponent } from './hairstylist-profile-pics/hairstylist-profile-pics.component';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AdvancedFilterComponent } from './advanced-filter/advanced-filter.component';
import { PaypalComponent } from './paypal/paypal.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatNativeDateModule} from '@angular/material';

const routes: Routes = [
  {
    path : '', component : HomePageComponent
  },
  {
    path: 'search', component: SearchResultsComponent
  },
  {
    path: 'hairstylist-pro/:id', component: HairstylistProfileComponent
  },
  {
    path: 'paypal', component: PaypalComponent
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
    BookingShowsComponent,
    HairstylistProfilePicsComponent,
    AdvancedFilterComponent,
    PaypalComponent,
  ],
  imports: [
    BrowserModule, ClickOutsideModule,
    RouterModule.forRoot(routes),
    Ng2CarouselamosModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule, MatCheckboxModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    MatSliderModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule
  ],
  providers: [ { provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]

})
export class AppModule {
}
