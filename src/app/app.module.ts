import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CounterLibModule } from "../../projects/counter-lib/src/public-api";

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';

// import '../assets/counter-web-component/runtime.js';
// import '../assets/counter-web-component/main.js';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CounterLibModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  //schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule {
}
