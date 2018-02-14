import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PUBGTrackerService {
  constructor (private http: Http) {}

  headers = new Headers();

  getUser(username : String) {
  	this.headers.append('TRN-API-KEY','5596f0de-2e8a-4b3f-8fa6-499701859a77');
    return this.http.get('https://pubgtracker.com/api/profile/pc/' + username,{headers: this.headers}).map((res:Response) => res.json());
  }
}