import {Component, OnInit} from '@angular/core';
import {PostsService} from '../shared/posts.service';
import {Observable} from 'rxjs';
import {Carousel, Post} from '../shared/interfaces';
import {CarouselService} from '../shared/carousel.service';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

    posts$: Observable<Post []>;
    carousel$: Observable<Carousel []>;
    showMore = false;


    constructor(private postsService: PostsService,
                private carouselService: CarouselService) {
    }


    ngOnInit() {

        this.posts$ = this.postsService.getAll();
        this.carousel$ = this.carouselService.getAll();
    }


}
