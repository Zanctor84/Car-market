import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Carousel, FbCreateResponse} from './interfaces';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class CarouselService {
    constructor(private http: HttpClient) {
    }


    create(carousel: Carousel): Observable<Carousel> {
        return this.http.post(`${environment.fbDbUrl}/carousel.json`, carousel)
            .pipe(map((response: FbCreateResponse) => {
                return {
                    ...carousel,
                    id: response.name
                };
            }));
    }

    getAll(): Observable<Carousel[]> {
        return this.http.get(`${environment.fbDbUrl}/carousel.json`)
            .pipe(map((response: { [key: string]: any }) => {
                return Object
                    .keys(response)
                    .map(key => ({
                        ...response[key],
                        id: key
                    }));
            }));
    }

}
