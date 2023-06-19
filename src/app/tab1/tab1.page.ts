import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
  
  herramientas = [
    {nombre:"motor", descripcion:"asies",imagen:""},
    {nombre:"turbina", descripcion:"la turbina",imagen:""},
    {nombre:"aceite de motor", descripcion:"aceite de motor",imagen:""},
  ];

}
