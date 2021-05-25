import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechnicalComponent } from './technical/technical.component';

const routes: Routes = [
  { path: '', component: TechnicalComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnicalRoutingModule { }
