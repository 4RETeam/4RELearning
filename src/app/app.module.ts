import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatButtonModule} from '@angular/material/button'
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import {MatDialogModule} from '@angular/material/dialog'

import  {UsersModule} from './users/users.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './AllP/navbar/navbar.component';
import { FooterComponent } from './AllP/footer/footer.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { PreFooterComponent } from './AllP/pre-footer/pre-footer.component';
import { StatsComponent } from './Character/stats/stats.component';
import { IvtComponent } from './Character/ivt/ivt.component';
import { SkillsComponent } from './Character/skills/skills.component';
import { HomePageComponent } from './usslessPages/home-page/home-page.component';
import { AboutAssComponent } from './usslessPages/about-ass/about-ass.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,
    PreFooterComponent,
    StatsComponent,
    IvtComponent,
    SkillsComponent,
    HomePageComponent,
    AboutAssComponent,
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    HttpClientModule,
    MatDialogModule,
    
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
