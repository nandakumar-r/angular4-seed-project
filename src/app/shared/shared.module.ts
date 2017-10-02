import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShowAuthedDirective } from './show-authed.directive';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ ShowAuthedDirective],
  exports: [
    ShowAuthedDirective
  ]
})
export class SharedModule { }
