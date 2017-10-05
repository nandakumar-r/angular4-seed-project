import { LoaderService } from './shared/services/loader.service';
import { UserService } from './shared/services/user-service.service';
import { Component, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showLoader: boolean;
  constructor(private loaderService: LoaderService,public toastr: ToastsManager, vcr: ViewContainerRef, private userService: UserService) {
    this.toastr.setRootViewContainerRef(vcr);
    this.showSuccess();
    this.userService.populate();
 }
 showSuccess() {
  this.toastr.success('You are awesome!', 'Success!');
  this.toastr.error('This is not good!', 'Oops!');
}
}

