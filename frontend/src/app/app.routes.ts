import { PictureListComponent } from './picture-list/picture-list.component';
import { Routes } from '@angular/router';
import { PictureDetailViewComponent } from './picture-detail-view/picture-detail-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AmsterdamComponent } from './amsterdam/amsterdam.component';
import { IcelandComponent } from './iceland/iceland.component';
import { DonadeaComponent } from './donadea/donadea.component';
import { ContactComponent } from './contact/contact.component';
import { CVComponent } from './cv/cv.component';
import { PUBGTrackerComponent } from './pubg-tracker/pubg-tracker.component'

export const BarryKyAppRoutes: Routes = [
	{ 	path: '', 
		component: DashboardComponent,
		children: [
		    { path: '', redirectTo: 'dashboard/70' },
		    { path: 'dashboard/:id', component: PictureDetailViewComponent }
		]},
	{ path: 'gallery', component : GalleryComponent},
	{ path: 'contact', component : ContactComponent},
	{ path: 'amsterdam', component : AmsterdamComponent},
	{ path: 'iceland', component : IcelandComponent},
	{ path: 'donadea', component : DonadeaComponent},
	{ path: 'cv', component : CVComponent},
	{ path: 'pubg-tracker', component : PUBGTrackerComponent},
	{ path: '**', redirectTo: 'dashboard/70' }
];