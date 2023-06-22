import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
  
  flipState: boolean[] = [];
  showImage: boolean[] = [];

  herramientas = [
    { nombre: 'Llave de tubo', descripcion: 'Herramienta utilizada para apretar o aflojar tuercas y pernos.', imagen: 'assets/img/llavedetubo.jpg'},
    { nombre: 'Destornillador', descripcion: 'Herramienta con una punta en forma de hoja que se utiliza para girar y ajustar tornillos.',imagen:'assets/img/destornillador.jpg' },
    { nombre: 'Alicate', descripcion: 'Herramienta de agarre que se utiliza para sujetar, torcer o cortar objetos como alambres.',imagen:'assets/img/alicate.jpg' },
    { nombre: 'Compresor de aire', descripcion: 'Utilizado para generar y almacenar aire comprimido.',imagen:'assets/img/compresordeaire.jpg' },
    { nombre: 'Multímetro', descripcion: 'Herramienta de medición electrónica utilizada para medir voltaje, corriente y resistencia eléctrica.',imagen:'assets/img/multimetro.jpg' },
    { nombre: 'Gato hidráulico', descripcion: 'Dispositivo utilizado para elevar vehículos y facilitar la reparación en la parte inferior del automóvil.',imagen:'assets/img/gato.jpg'},
    { nombre: 'Llave de impacto', descripcion: 'Herramienta eléctrica utilizada para apretar o aflojar pernos y tuercas con alta potencia y torque.',imagen:'assets/img/llavedeimpacto.jpg' },
    { nombre: 'Extractor de rodamientos', descripcion: 'Se usa para extraer rodamientos, poleas u otros componentes ajustados y difíciles de quitar.',imagen:'assets/img/extractorderodamiento.jpg' }
  ];

  flipCard(index: number): void {
    this.flipState[index] = !this.flipState[index];

    if (!this.flipState[index]) {
      this.showImage[index] = false;
    }
  }

  toggleImage(index: number): void {
    this.showImage[index] = !this.showImage[index];
  }
}
