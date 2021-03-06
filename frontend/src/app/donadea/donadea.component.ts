import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../event-bus-service/event-bus-service';
import { ActivatedRoute } from '@angular/router';
import { PICTURE_DATA } from '../data/picture-data';
import { Picture } from '../models/picture';

@Component({
  selector: 'bky-donadea',
  templateUrl: './donadea.component.html',
  styleUrls: ['./donadea.component.css']
})
export class DonadeaComponent implements OnInit {
	
	picture : Picture;
	pictureList: Array<Picture>;
	constructor(private eventBus : EventBusService, private route : ActivatedRoute) {};

	ngOnInit() {
		this.pictureList = new Array();
		this.getPictureList()
	}

	getPictureList(){
		for(let i = 0;i < PICTURE_DATA.length; i++){
			if(PICTURE_DATA[i].type == 'Donadea'){
				this.pictureList.push(PICTURE_DATA[i]);
			}
		}
		window.scrollTo(0, 0);
	}
}
