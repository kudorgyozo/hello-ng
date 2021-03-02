import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-ng';

  @Input() test: string = 'asdf';

  counterChanged(counter: number) {
    console.dir(counter);
    console.log('counterChanged ' +counter);
  }
}
