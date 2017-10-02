import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'layout-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  today: number = Date.now();
  constructor() {

   }

  ngOnInit() {
  }

}
