import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../event-bus-service/event-bus-service';
import { ActivatedRoute } from '@angular/router';
import { PICTURE_DATA } from '../data/picture-data';
import { Picture } from '../models/picture';

@Component({
  selector: 'bky-iceland',
  templateUrl: './iceland.component.html',
  styleUrls: ['./iceland.component.css']
})
export class IcelandComponent implements OnInit {
	
	picture : Picture;
	pictureList: Array<Picture>;
	constructor(private eventBus : EventBusService, private route : ActivatedRoute) {};

	ngOnInit() {
		this.pictureList = new Array();
		this.getPictureList()
	}

	getPictureList(){
		for(let i = 0;i < PICTURE_DATA.length; i++){
			if(PICTURE_DATA[i].type == 'Iceland'){
				this.pictureList.push(PICTURE_DATA[i]);
			}
		}
		window.scrollTo(0, 0);
	}
}
