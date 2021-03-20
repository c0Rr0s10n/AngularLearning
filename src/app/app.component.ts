
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  elems = [
    {
      name: 'Alex',
      lname: 'Lee'
    },
    {
      name: 'Ruslan',
      lname: 'Bakhyshev'
    },
    {
      name: 'Dastan',
      lname: 'Otarkhan'
    },
    {
      name: 'Nurbol',
      lname: 'Kalzhigitov'
    }
  ];
}
