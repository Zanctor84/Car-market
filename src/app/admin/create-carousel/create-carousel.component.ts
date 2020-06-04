import {Component, OnDestroy, OnInit} from '@angular/core';
import {Carousel} from '../../shared/interfaces';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CarouselService} from '../../shared/carousel.service';
import {AlertService} from '../shared/services/alert.service';
import {Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'app-create-carousel',
    templateUrl: './create-carousel.component.html',
    styleUrls: ['./create-carousel.component.scss']
})
export class CreateCarouselComponent implements OnInit, OnDestroy {


    form: FormGroup;
    carousels: Carousel [] = [];
    cSub: Subscription;


    constructor(private http: HttpClient,
                private carouselService: CarouselService,
                private alert: AlertService) {


    }

    ngOnInit() {
        this.form = new FormGroup({
            image: new FormControl('', Validators.required),
            mtitle: new FormControl('', Validators.required),
            stitle: new FormControl('', Validators.required),
            cprice: new FormControl('', Validators.required)
        });

        this.cSub = this.carouselService.getAll().subscribe(carousels => {
            this.carousels = carousels;
        });
    }


    ngOnDestroy() {
        if (this.cSub) {
            this.cSub.unsubscribe();
        }
    }


    submit() {
        if (this.form.invalid) {
            return;
        }

        const carousel: Carousel = {
            mtitle: this.form.value.mtitle,
            image: this.form.value.image,
            stitle: this.form.value.stitle,
            cprice: this.form.value.cprice
        };
        // console.log ('form:', carousel);
        this.carouselService.create(carousel).subscribe(() => {
            this.form.reset();
            this.alert.success('Успешно создан');
        });
    }


}
