import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }            from './app.component';
import { AppRoutingModule }        from './app-routing.module';

import { HeroesModule }            from './heroes/heroes.module';
import { CrisisCenterModule }            from './crisis-center/crisis-center.module';

import { DialogService }            from './dialog.service';






import { PageNotFoundComponent }   from './not-found.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HeroesModule,
    CrisisCenterModule,
   
  
   
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
  
    PageNotFoundComponent
  ],
  providers: [
   DialogService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/