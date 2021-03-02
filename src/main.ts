import { enableProdMode, NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import './assets/counter-web-component/runtime.js';
import './assets/counter-web-component/main.js';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule).then((module: NgModuleRef<AppModule>) => {
    console.log(module);
  })
  .catch(err => console.error(err));
