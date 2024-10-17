import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';


@NgModule({ //metadata
  declarations: [ //contains comp.
    AppComponent,
    Comp1Component,
   
  ],
  imports: [ //contains modules
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], //service and classname written here and imported up
  bootstrap: [AppComponent]
})
export class AppModule { } //this class AppModule is invoked becuse it below decorator
