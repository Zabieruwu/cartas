import { Component } from '@angular/core';

interface Animal {
  nombre: string;
  imagen: string;
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  animales = [
    { nombre: 'perro', imagen: 'assets/img/perro.jpg' },
    { nombre: 'gato', imagen: 'assets/img/gato.jpg' },
    // Agrega más animales si lo deseas
  ];

  animalMostrado: any;
  respuesta: string = '';
  juegoTerminado: boolean = false;
  juegoGanado: boolean = false;
  letrasFaltantes: string[] = [];
  letrasMostradas: string[] = [];
  intentosRestantes: number = 6;
  mostrarCasillas: boolean = false;

  constructor() {
    this.iniciarJuego();
  }

  iniciarJuego() {
    this.juegoTerminado = false;
    this.respuesta = '';
    this.intentosRestantes = 6;
    const indiceAleatorio = Math.floor(Math.random() * this.animales.length);
    this.animalMostrado = this.animales[indiceAleatorio];
    this.generarCasillas();
  }

  letrasDesordenadas: string[] = [];
letrasRestantes: string[] = [];

generarCasillas() {
  this.letrasFaltantes = [];
  const animalSinTildes = this.quitarTildes(this.animalMostrado.nombre.toLowerCase());

  this.letrasDesordenadas = animalSinTildes.split('').sort(() => Math.random() - 0.5);
  this.letrasRestantes = [...this.letrasDesordenadas];

  this.letrasMostradas = [];
  for (const letra of animalSinTildes) {
    if (this.letrasRestantes.includes(letra)) {
      this.letrasFaltantes.push(letra);
      this.letrasMostradas.push('');
      this.letrasRestantes.splice(this.letrasRestantes.indexOf(letra), 1);
    } else {
      this.letrasMostradas.push(letra.toUpperCase());
    }
  }
}

colocarLetra(letra: string) {
  const indiceVacio = this.letrasMostradas.indexOf('');
  if (indiceVacio !== -1) {
    this.letrasMostradas[indiceVacio] = letra;
  }
}
  
  

  verificarRespuesta() {
    const respuestaCompleta = this.letrasMostradas.join('').toLowerCase();
    if (respuestaCompleta === this.quitarTildes(this.animalMostrado.nombre.toLowerCase())) {
      this.juegoGanado = true;
    } else {
      this.intentosRestantes--;
      if (this.intentosRestantes === 0) {
        this.juegoGanado = false;
      }
    }
    this.mostrarCasillas = true;
    this.juegoTerminado = true;
  }

  obtenerAnimalAleatorio() {
    const animales: Animal[] = [
      { nombre: 'gato', imagen: 'assets/img/gato.jpg' },
      { nombre: 'perro', imagen: 'assets/img/perro.jpg' },
      { nombre: 'elefante', imagen: 'assets/img/elefante.jpg' },
      // Agrega más animales aquí con sus respectivas imágenes
    ];

    const indiceAleatorio = Math.floor(Math.random() * animales.length);
    this.animalMostrado = animales[indiceAleatorio];
    this.generarCasillas();
  }

  reiniciarJuego() {
    this.juegoTerminado = false;
    this.juegoGanado = false;
    this.animalMostrado = null;
    this.letrasFaltantes = [];
    this.letrasMostradas = [];
    this.letrasDesordenadas = [];
    this.letrasRestantes = [];
    this.obtenerAnimalAleatorio();
  }

  getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  quitarTildes(texto: string) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
}