import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilingTypeComponent } from './_pages/filing-type/filing-type.component';
import { SaleAmountComponent } from './_pages/sale-amount/sale-amount.component';
import { ConfirmComponent } from './_pages/confirm/confirm.component';

const routes: Routes = [
  {
    path: 'filing',
    component: FilingTypeComponent,
  },
  {
    path: 'sale-amount',
    component: SaleAmountComponent,
  },
  {
    path: 'confirm',
    component: ConfirmComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
