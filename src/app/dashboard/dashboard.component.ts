import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../event-bus-service/event-bus-service';

@Component({
	selector: 'bky-dashboard',
	  template: `
	    <router-outlet></router-outlet>
	  `,
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	constructor(private eventBus : EventBusService) { }

	ngOnInit() {
	}

}
