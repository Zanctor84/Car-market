import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-about-us',
    templateUrl: './about-us.component.html',
    styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

    aboutRand = Math.floor(Math.random() * 5 + 1);
    aboutRandRight = Math.floor(Math.random() * 5 + 1);

    constructor() {

    }

    ngOnInit(): void {
    }

}
