import {Component} from '@angular/core';
import {MouseEvent} from '@agm/core';

@Component({
    selector: 'app-site-map',
    templateUrl: './site-map.component.html',
    styleUrls: ['./site-map.component.scss']
})
export class SiteMapComponent {

    lat: number = 49.9918497;
    lng: number = 36.2325454;

    constructor() {
    }

}
