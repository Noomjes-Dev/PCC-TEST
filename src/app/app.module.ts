import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './_core/navbar/navbar.component';
import { HeaderComponent } from './_core/header/header.component';
import { FilingTypeComponent } from './_pages/filing-type/filing-type.component';
import { SaleAmountComponent } from './_pages/sale-amount/sale-amount.component';
import { MonthComponent } from './_pages/month/month.component';
import { YearComponent } from './_pages/year/year.component';
import { TaxAmountComponent } from './_pages/tax-amount/tax-amount.component';
import { SurchargeComponent } from './_pages/surcharge/surcharge.component';
import { PanaltyComponent } from './_pages/panalty/panalty.component';
import { TotalAmountComponent } from './_pages/total-amount/total-amount.component';
import { ConfirmComponent } from './_pages/confirm/confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FilingTypeComponent,
    SaleAmountComponent,
    MonthComponent,
    YearComponent,
    TaxAmountComponent,
    SurchargeComponent,
    PanaltyComponent,
    TotalAmountComponent,
    ConfirmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
