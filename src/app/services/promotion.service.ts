import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

	getPromotions(): Observable<Promotion[]> {
		return of(PROMOTIONS).pipe(delay(2000));
	}

	getPromotion(id : string): Observable<Promotion> {
		return of(PROMOTIONS.filter((promotion) => (promotion.id ===id))[0]).pipe(delay(2000));
	}

	getFeaturedPromotion(): Observable<Promotion> {
		return of(PROMOTIONS.filter((promotion) => promotion.featured)[0]).pipe(delay(2000));

	}

  constructor(private http: HttpClient) { }
}
