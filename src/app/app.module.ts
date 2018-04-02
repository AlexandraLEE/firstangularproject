// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Libraries

// Project files
import { AppComponent } from './app.component';



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
