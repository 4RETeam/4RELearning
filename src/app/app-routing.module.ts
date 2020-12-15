import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './users/login/login.component';
import {SignupComponent} from './users/signup/signup.component';
import {PageNotFoundComponent} from './errors/page-not-found/page-not-found.component';
import {StatsComponent} from './Character/stats/stats.component';
import { HomePageComponent } from './usslessPages/home-page/home-page.component'
import {ChatRoomComponent} from './users/chat-room/chat-room.component';
import {GalleryComponent } from './Character/gallery/gallery.component';

const routes: Routes = [
{
path:'login',
component:LoginComponent
},
{
  path:'singup',
  component:SignupComponent
},
{
  path:'character',
  component:StatsComponent
},
{
  path:'chat-room',
  component:ChatRoomComponent
},
{
  path:'char-gall',
  component:GalleryComponent
},


{
  path:'',
  component:HomePageComponent
},
{
  path:'**',
  component:PageNotFoundComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
