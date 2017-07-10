import { Component, OnInit } from '@angular/core';
import { Picture } from '../models/picture';
import { EventBusService } from '../event-bus-service/event-bus-service';
import { PICTURE_DATA } from '../data/picture-data';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'bky-picture-list',
  templateUrl: './picture-list.component.html',
  styleUrls: ['./picture-list.component.css']
})
export class PictureListComponent implements OnInit {

	unfilteredPictures: Array<Picture>;
	pictures: Array<Picture>;
	title : string;
	route : string;
	subscription: Subscription;
	
	constructor(private eventBus : EventBusService) {};
	
	ngOnInit() {
		this.title="FEATURED";
		this.subscription = this.eventBus.observe('listChange').subscribe(title => {
			this.title = title;
			this.filterPictures(this.title);
		});
	}
	
	ngOnDestroy(){
		this.subscription.unsubscribe();
	}
	
	filterPictures(title){
		this.unfilteredPictures = PICTURE_DATA;
		
		if(this.title != "FEATURED"){
			this.route = "/gallery/" + title.toLowerCase() + "/";
			this.pictures = new Array();
			for(let i = 0;i < this.unfilteredPictures.length; i++){
				if(this.unfilteredPictures[i].type.toUpperCase() == this.title){
					this.pictures.push(this.unfilteredPictures[i]);
				}
			}
		} else {
			this.route="/dashboard/";
			this.pictures = new Array();
			for(let i = 0;i < this.unfilteredPictures.length; i++){
				if(this.unfilteredPictures[i].featured.toUpperCase() == 'Y'){
					this.pictures.push(this.unfilteredPictures[i]);
				}
			}
		}
	}
}
