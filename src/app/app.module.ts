import { LoaderService } from './shared/services/loader.service';
import { HttpClient } from './services/http.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { TagsService } from './shared/services/tag.service';
import { HomeModule } from './home/home.module';
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

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule ,AuthModule, ToastModule.forRoot(), BrowserAnimationsModule, SharedModule, RouterModule, HttpModule,rootRouting,HomeModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [UserService, ApiService,TagsService,HttpClient,LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
