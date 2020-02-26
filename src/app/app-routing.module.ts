import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LuxLayoutModule } from '@ihk-gfi/lux-components';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'datenschutz', component: DatenschutzComponent },
  { path: '**', component: ErrorComponent } // Immer als letzte Route !! -> 404!
];

@NgModule({
  imports: [
    LuxLayoutModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
