import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Picture } from '../models/picture';
import { PictureService } from '../picture.service';
import { EventBusService } from '../event-bus-service/event-bus-service';
import 'rxjs/add/operator/switchMap';
import { PICTURE_DATA } from '../data/picture-data';

@Component({
  selector: 'bky-picture-detail-view',
  template: `<bky-picture-detail [picture]="picture" class="app"></bky-picture-detail>`,
  styleUrls: ['./picture-detail-view.component.css']
})
export class PictureDetailViewComponent implements OnInit {

  picture: Picture;

  constructor(private pictureService : PictureService, private router : ActivatedRoute, private route: ActivatedRoute, private eventBus : EventBusService) { }
  
  ngOnInit() {
		this.eventBus.emit('listChange', 'FEATURED');
		this.router.params.subscribe(params => {
			this.picture = PICTURE_DATA[params['id']];
			window.scrollTo(0,0);
		});
	}
}
