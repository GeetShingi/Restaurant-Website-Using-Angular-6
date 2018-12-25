import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

	getLeaders(): Observable<Leader[]> {
		return of(LEADERS).pipe(delay(2000));
	}

	getFeaturedLeader(): Observable<Leader> {
		return of(LEADERS.filter((leader) => leader.featured)[0]).pipe(delay(2000));
	}

  constructor(private http:HttpClient) { }
}
