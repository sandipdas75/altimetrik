import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:'./home/home.module#HomeModule'
  },
  {
     path:'all',
     loadChildren:'./home/home.module#HomeModule'
  },
  {
     path:'financial',
     loadChildren:'./financial/financial.module#FinancialModule'
  },
  {
     path:'technical',
     loadChildren:'./technical/technical.module#TechnicalModule'
  },
  {
     path:'marketing',
     loadChildren:'./marketing/marketing.module#MarketingModule'
  },
  {
     path:'resouce',
     loadChildren:'./human_resources/human_resources.module#ResourceModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
