import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bky-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

	isMobile : boolean;
	constructor() {};

	ngOnInit() {
		this.isMobile = false;
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 			this.isMobile = true;
		};
	}

}
