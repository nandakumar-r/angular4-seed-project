import { LoaderService } from './../shared/services/loader.service';

import { Directive, TemplateRef, ViewContainerRef, OnInit, Input } from '@angular/core';

@Directive({ selector: '[showLoader]' })
export class ShowLoaderDirective implements OnInit {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private loaderService: LoaderService
  ) {}

  condition: boolean;

  ngOnInit() {
    // this.userService.isAuthenticated.subscribe(
    //   (isAuthenticated) => {
    //     if (isAuthenticated && this.condition || !isAuthenticated && !this.condition) {
    //       this.viewContainer.createEmbeddedView(this.templateRef);
    //     } else {
    //       this.viewContainer.clear();
    //     }
    //   }
    // );
      this.loaderService.status.subscribe((val: boolean) => {
           if (val && this.condition || !val && !this.condition) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
        });
  }

  @Input() set showLoader(condition: boolean) {
    this.condition = condition;
  }

}