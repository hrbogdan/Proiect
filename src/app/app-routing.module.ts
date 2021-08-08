import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventsComponent } from './events/events.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'admin-login', component: AdminPanelComponent },
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'events', component: EventsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about-us', component: AboutUsComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'event-detail',
    component: EventDetailComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
