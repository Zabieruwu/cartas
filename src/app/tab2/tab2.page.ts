import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  animations: [
    trigger('slideAnimation', [
      state('inactive', style({ transform: 'translateX(-100%)' })),
      state('active', style({ transform: 'translateX(0)' })),
      transition('inactive => active', animate('1s')),
    ]),
  ],
})
export class Tab2Page implements AfterViewInit {
  @ViewChild('footer')
  footer!: ElementRef;

  constructor( public router : Router,
              public alertController : AlertController
      ) {}

  ngAfterViewInit() {
    this.toggleAnimation()
    this.startAnimation();
  }

  startAnimation() {
    this.footer.nativeElement.style.opacity = '1';
    this.footer.nativeElement.style.transform = 'translateX(0)';
  }

  ngOnInit() {

  }

  isClicked: boolean = false;
  //animacion foto
  toggleAnimation() {
    this.isClicked = !this.isClicked;
  }

  start(){
    this.presentAlertStart();

  }

  continue(){
    this.router.navigate(["/game"]);
  }

  async presentAlertStart(){
    const alert = await this.alertController.create({
      header : "¿Deseas comenzar de 0?",
      message : "Perderás tu score : "+ localStorage.getItem('score'),
      buttons : [{
        text: "SI",
        handler : ()=>{
          localStorage.setItem("questionNumber","0");
          localStorage.setItem("score","0")
          this.router.navigate(["/game"]);
        }
      },
      {
        text: "NO",
        handler : ()=>{
        }
      }]
    });
    await alert.present();
    let result = await alert.onDidDismiss();
  }

  insta(){
    window.open("https://www.instagram.com/ragnaarson/",'_system','location=yes')
  }

}
