import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Picture } from '../models/picture';
import { PictureService } from '../picture.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bky-picture-detail',
  templateUrl: './picture-detail.component.html',
  styleUrls: ['./picture-detail.component.css']
})
export class PictureDetailComponent implements OnInit {
	@Input() picture: Picture;
	isMobile : boolean;
	constructor() {};

	ngOnInit() {
		this.isMobile = false;
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 			this.isMobile = true;
		};
	}
}
