import { Injectable } from '@angular/core';
import { Picture } from './models/picture';
import { PICTURE_DATA } from './data/picture-data';
import { Http } from '@angular/http';
import 'rxjs/'

@Injectable()
export class PictureService {
	
	private API_ENDPOINT = 'http://localhost:4201';
	constructor(private http: Http) { }
  
	getPictures() {
		return PICTURE_DATA;
	}
  
	getPicture(id: number | string) {
		return PICTURE_DATA[id];
	}
  
	updatePicture(picture: Picture) {
	    let url = `${this.API_ENDPOINT}/api/pictures/${picture.id}`;
	    return this.http.put(url, picture);
	}
	
	search(term: string) {
	    return this.http.get(`${this.API_ENDPOINT}/api/search?text=${term}`)
		.map(res => res.json())
		.map(data => data.items);
	}
	
	addPicture(picture: Picture) {
		let url = `${this.API_ENDPOINT}/api/pictures/`;
		return this.http.post(url, picture);
	}
}
