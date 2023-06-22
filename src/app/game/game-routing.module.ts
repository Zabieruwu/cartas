import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamePage } from './game.page';
import { Tab2Page } from '../tab2/tab2.page';

const routes: Routes = [
  {
    path: '',
    component: GamePage,
    children: [
      { path: '', component: Tab2Page },
      // Otras rutas específicas de la pestaña 'game'
      { path: 'tabs', redirectTo: 'tab2', pathMatch: 'full' },
      { path: '**', redirectTo: 'tab2' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamePageRoutingModule {}
