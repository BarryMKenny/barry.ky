import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../event-bus-service/event-bus-service';
import { ActivatedRoute } from '@angular/router';
import { PICTURE_DATA } from '../data/picture-data';
import { Picture } from '../models/picture';
import { PictureService } from '../picture.service';

@Component({
  selector: 'bky-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent implements OnInit {
	
	picture : Picture;
	constructor(private pictureService : PictureService, private router : ActivatedRoute, private route: ActivatedRoute) { }

	ngOnInit() {
	}
}
