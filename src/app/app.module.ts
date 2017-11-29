import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { Persistor } from './modules/dataManager/persistors/persistor.service';


@NgModule({
    declarations: [              // components, declaratives, pipes
        AppComponent
    ],
    imports: [                   // modules
        BrowserModule
    ],
    providers: [                 // used for DI, i.e. can place Services here
        Persistor
    ],
    bootstrap: [                 // the component that will be bootstrapped
        AppComponent
    ]
})
export class AppModule { }
