import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../interfaces';


@Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {


    @Input() post: Post;

    constructor() {

    }

    ngOnInit() {

    }


}
