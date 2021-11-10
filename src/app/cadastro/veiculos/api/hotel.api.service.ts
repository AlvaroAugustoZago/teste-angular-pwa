import { Hotel } from '../model/hotel';
import { HotelFilter } from '../model/hotel-filter';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

const headers = new HttpHeaders().set('Accept', 'application/json').set('Service-Worker-Allowed', '');

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  hotelList: Hotel[] = [];
  api = 'https://www.angular.at/api/hotel';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Hotel> {
    const url = `${this.api}/${id}`;
    const params = { id: id };
    return this.http.get<Hotel>(url, {params, headers});
  }

  load(filter: HotelFilter): void {
    this.find(filter).subscribe(result => {
        this.hotelList = result;
      },
      err => {
        this.hotelList = [{ "id": 7, "name": "axAxc", "city": "ttt", "stars": 0 }, { "id": 5, "name": "Budget Hotel", "city": "Hamburg", "stars": 1 }, { "id": 2, "name": "Hotel Costa Lotta", "city": "Graz", "stars": 4 }, { "id": 1, "name": "Hotel Mama", "city": "Graz", "stars": 6 }, { "id": 3, "name": "Hotel zur Post", "city": "Hamburg", "stars": 3 }, { "id": 4, "name": "Some Hotel", "city": "Hamburg", "stars": 3 }, { "id": 6, "name": "wikan hotel", "city": "Bali", "stars": 3 }] as unknown as Array<Hotel>;
        console.error('error loading', err);
      }
    );
  }

  find(filter: HotelFilter): Observable<Hotel[]> {
    const params = {
      'city': filter.city,
    };

    return this.http.get<Hotel[]>(this.api, {params, headers});
  }

  save(entity: Hotel): Observable<Hotel> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.put<Hotel>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<Hotel>(url, entity, {headers, params});
    }
  }

  delete(entity: Hotel): Observable<Hotel> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.delete<Hotel>(url, {headers, params});
    }
    return EMPTY;
  }
}

