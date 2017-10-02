import { FooterComponent } from './shared/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './shared/header/header.component';
import { UserService } from './shared/services/user-service.service';
import { ApiService } from './services/api.service';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing';
// const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule , ToastModule.forRoot(), BrowserAnimationsModule, SharedModule, RouterModule, HttpModule,AppRoutingModule
  ],
  providers: [UserService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
