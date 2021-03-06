import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// to get the angular cli to work without throwing errors in Webstorm:
// 1. remove "lib": ["es6, dom"] from tsconfig
// 2. installed @types - "npm install --save-dev @types/core-js
// 3. add "declare var require: any;" to typings.d.ts
// 4. add "typescript_tsdk": "/usr/local/lib/node_modules/typescript/lib", to tsconfig