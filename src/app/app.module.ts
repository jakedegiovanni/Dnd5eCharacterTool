import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [              // components, declaratives, pipes
    AppComponent
  ],
  imports: [                   // modules
    BrowserModule
  ],
  providers: [],               // used for DI, i.e. can place Services here
  bootstrap: [AppComponent]    // the component that will be bootstrapped
})
export class AppModule { }
