import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnicalRoutingModule } from './technical-routing.module';
import { TechnicalComponent } from './technical/technical.component';

@NgModule({
  imports: [
    CommonModule,
    TechnicalRoutingModule
  ],
  declarations: [TechnicalComponent]
})
export class TechnicalModule { }
