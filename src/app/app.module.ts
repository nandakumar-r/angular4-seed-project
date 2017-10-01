import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule , ToastModule.forRoot(), BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
