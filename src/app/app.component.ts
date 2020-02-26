import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LuxAppFooterLinkService,
        LuxAppFooterLinkInfo} from '@ihk-gfi/lux-components';

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public router: Router, public linkService: LuxAppFooterLinkService) {
  }

  ngOnInit(): void {
    this.linkService.linkInfos = [
      new LuxAppFooterLinkInfo('Datenschutz', 'datenschutz', true),
      new LuxAppFooterLinkInfo('Impressum', 'impressum'),
    ];
  }

}
