import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgForm} from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router'
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

import { AngularFireModule } from 'angularfire2'
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NavcompComponent } from './navcomp/navcomp.component';
import { JobsComponent } from './jobs/jobs.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { SearchMenuComponent } from './search-menu/search-menu.component';
//import { AngularFireDatabaseModule} from 'angularfire2/database';



const appRoutes: Routes = [
  { path: 'jobs', component: JobsComponent },
  { path: 'jobs/:searchTxt', component: JobsComponent },
  { path: '**', component: HomeComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavcompComponent,
    JobsComponent,
    PageNotFoundComponent,
    HomeComponent,
    SearchMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule// 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
