import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../event-bus-service/event-bus-service';
import { ActivatedRoute } from '@angular/router';
import { PICTURE_DATA } from '../data/picture-data';
import { Picture } from '../models/picture';
import { PictureService } from '../picture.service';
import { Http, Response, Headers } from '@angular/http';
import { PUBGTrackerService } from '../pubg-tracker/pubg-tracker.service';

@Component({
  selector: 'bky-pubg-tracker',
  templateUrl: './pubg-tracker.component.html',
  styleUrls: ['./pubg-tracker.component.css']
})
export class PUBGTrackerComponent implements OnInit {
	
	picture : Picture;
	stats : {};
	headers : Headers;
	constructor(private pictureService : PictureService, private router : ActivatedRoute, private route: ActivatedRoute, 
		private http: Http, private pubgTracker: PUBGTrackerService) { }

	ngOnInit() {
    	this.pubgTracker.getUser('ApollyonVeyron').subscribe(data => this.stats = data);
    }
}
