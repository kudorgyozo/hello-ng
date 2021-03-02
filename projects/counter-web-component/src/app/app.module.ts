import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { CounterLibModule, CounterComponent } from "../../../counter-lib/src/public-api";
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [ ],
  imports: [
    BrowserModule, CounterLibModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [CounterComponent]
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    let customElementClass = createCustomElement(CounterComponent, { injector: this.injector });
    customElements.define('counter-web-component', customElementClass);
  }
}
