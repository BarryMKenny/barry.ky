import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BarryKyAppComponent } from './barry-ky.component';
import { PictureListComponent } from './picture-list/picture-list.component';
import { HeaderComponent } from './header';
import { PictureService } from './picture.service';
import { RouterModule } from '@angular/router';
import { BarryKyAppRoutes } from './app.routes';
import { PictureDetailComponent } from './picture-detail/picture-detail.component';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { FormsModule } from '@angular/forms';
import { PictureDetailViewComponent } from './picture-detail-view/picture-detail-view.component';
import { EventBusService } from './event-bus-service/event-bus-service';
import { EmailValidatorDirective } from './email-validator.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AmsterdamComponent } from './amsterdam/amsterdam.component';
import { IcelandComponent } from './iceland/iceland.component';
import { DonadeaComponent } from './donadea/donadea.component';
import { ContactComponent } from './contact/contact.component';
import { CVComponent } from './cv/cv.component';
import { PUBGTrackerComponent } from './pubg-tracker/pubg-tracker.component'
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PUBGTrackerService } from './pubg-tracker/pubg-tracker.service';

@NgModule({
  declarations: [BarryKyAppComponent, HeaderComponent, PictureListComponent, 
	  PictureDetailComponent, PictureDetailViewComponent, GalleryComponent,
                 EmailValidatorDirective, DashboardComponent, FooterComponent,
                 AmsterdamComponent, IcelandComponent, DonadeaComponent, 
                 ContactComponent, CVComponent, PUBGTrackerComponent],
  imports: [BrowserModule, RouterModule.forRoot(BarryKyAppRoutes), HttpModule, FormsModule, ReactiveFormsModule],
  bootstrap: [BarryKyAppComponent],
  providers: [PictureService, EventBusService, PUBGTrackerService, {provide: LocationStrategy, useClass: HashLocationStrategy, }]
  
})
export class BarryKyModule {

}
