// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Libraries

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
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],

  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
