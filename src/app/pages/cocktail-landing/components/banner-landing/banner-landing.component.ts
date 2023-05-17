import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
@Component({
  selector: 'app-banner-landing',
  templateUrl: './banner-landing.component.html',
  styleUrls: ['./banner-landing.component.scss']
})
export class BannerLandingComponent implements OnInit {

  ngOnInit(): void {
    Aos.init();
  }
}
