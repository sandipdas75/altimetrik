import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HumanResourcesComponent } from './human_resources/human_resources.component';
import { HumanResourceRoutingModule } from './human_resources-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HumanResourceRoutingModule
  ],
  declarations: [HumanResourcesComponent]
})
export class ResourceModule { }
