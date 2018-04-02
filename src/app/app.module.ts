// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// Libraries
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';

// Project files
import { AppComponent } from './app.component';
import { IntfinaleComponent } from './intfinale/intfinale.component';

const appRoutes: Routes = [
  { path: 'findprecious', component: IntfinaleComponent },
];




@NgModule({
  declarations: [
    AppComponent,
    IntfinaleComponent

  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],

  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
