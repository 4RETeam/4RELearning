import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsComponent } from '../stats/stats.component';
import { IvtComponent } from '../ivt/ivt.component';
import { SkillsComponent } from '../skills/skills.component';
import { GalleryComponent } from '../gallery/gallery.component';


@NgModule({
  declarations: [
    StatsComponent,
    IvtComponent,
    SkillsComponent,
    GalleryComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class CharModule { }
