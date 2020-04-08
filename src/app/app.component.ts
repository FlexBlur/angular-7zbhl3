import { Component } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'blogApp';
  titrePubli: string = "Ma première publi";
  contenuPubli: string = "C'est le bla bla bla";


  publis = [
    { titrePubli: "Ma première publi", contenuPubli: "C'est le bla bla bla" },
    { titrePubli: "Ma seconde publi", contenuPubli: "Un autre blablabla" },
    { titrePubli: "Ma troisième publi", contenuPubli: "Ohlàlà" },
  ];

}