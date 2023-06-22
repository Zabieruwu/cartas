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
    { nombre: 'Llave de tubo', descripcion: 'Herramienta utilizada para apretar o aflojar tuercas y pernos.', imagen:'tabs/tab1/img/llavedetubo.jpg' },
    { nombre: 'Destornillador', descripcion: 'Herramienta con una punta en forma de hoja que se utiliza para girar y ajustar tornillos.',imagen:'img/llavedetubo.jpg' },
    { nombre: 'Alicate', descripcion: 'Herramienta de agarre que se utiliza para sujetar, torcer o cortar objetos como alambres.',imagen:'img/llavedetubo.jpg' },
    { nombre: 'Compresor de aire', descripcion: 'Utilizado para generar y almacenar aire comprimido.',imagen:'img/llavedetubo.jpg' },
    { nombre: 'Multímetro', descripcion: 'Herramienta de medición electrónica utilizada para medir voltaje, corriente y resistencia eléctrica.',imagen:'img/llavedetubo.jpg' },
    { nombre: 'Gato hidráulico', descripcion: 'Dispositivo utilizado para elevar vehículos y facilitar la reparación en la parte inferior del automóvil.',imagen:'img/llavedetubo.jpg'},
    { nombre: 'Llave de impacto', descripcion: 'Herramienta eléctrica utilizada para apretar o aflojar pernos y tuercas con alta potencia y torque.',imagen:'img/llavedetubo.jpg' },
    { nombre: 'Extractor de rodamientos', descripcion: 'Se usa para extraer rodamientos, poleas u otros componentes ajustados y difíciles de quitar.',imagen:'img/llavedetubo.jpg' }
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
