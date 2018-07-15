import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor() {
    const config = {
      apiKey: 'AIzaSyBoP1qOVrs1XI5hj8IykOpiq7FXBvxNHk0',
      authDomain: 'bookshelves-fdc7a.firebaseapp.com',
      databaseURL: 'https://bookshelves-fdc7a.firebaseio.com',
      projectId: 'bookshelves-fdc7a',
      storageBucket: 'gs://bookshelves-fdc7a.appspot.com',
      messagingSenderId: '273128497986'
    };
    firebase.initializeApp(config);
  }

}
