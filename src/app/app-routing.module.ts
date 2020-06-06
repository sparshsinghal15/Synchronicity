import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { SponsorsComponent } from './sponsors/sponsors.component';


const routes: Routes = [
  {path: '', redirectTo: "/about", pathMatch: 'full'},
  {path: 'gallery', component: GalleryComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'sponsors', component: SponsorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
