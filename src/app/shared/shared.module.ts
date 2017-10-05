import { ModalModule } from 'ng2-modal';
import { ListErrorsComponent } from './errors/errors.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShowAuthedDirective } from './show-authed.directive';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ModalModule
  ],
  declarations: [ ShowAuthedDirective,ListErrorsComponent],
  exports: [
    ShowAuthedDirective,ListErrorsComponent
  ]
})
export class SharedModule { }
