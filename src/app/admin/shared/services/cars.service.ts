import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class CarsService {
    constructor(private http: HttpClient) {
    }

    getCars() {

        return this.http.get('http://localhost:3000/cars');
    }

}