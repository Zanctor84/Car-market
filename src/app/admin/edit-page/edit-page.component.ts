import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {PostsService} from '../../shared/posts.service';
import {switchMap} from 'rxjs/operators';
import {Post} from '../../shared/interfaces';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {AlertService} from '../shared/services/alert.service';

@Component({
    selector: 'app-edit-page',
    templateUrl: './edit-page.component.html',
    styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit, OnDestroy {

    form: FormGroup
    post: Post
    submitted = false

    uSub: Subscription


    constructor(
        private route: ActivatedRoute,
        private postsService: PostsService,
        private alert: AlertService
    ) {
    }

    ngOnInit() {
        this.route.params.pipe(
            switchMap((params: Params) => {
                return this.postsService.getById(params['id'])
            })
        ).subscribe((post: Post) => {
            this.post = post
            this.form = new FormGroup({
                image: new FormControl(post.image, Validators.required),
                title: new FormControl(post.title, Validators.required),
                price: new FormControl(post.price, Validators.required),
                year: new FormControl(post.year, Validators.required),
                motor: new FormControl(post.motor, Validators.required),
                run: new FormControl(post.run, Validators.required),
                text: new FormControl(post.text, Validators.required)
            })
        })
    }

    ngOnDestroy() {
        if (this.uSub) {
            this.uSub.unsubscribe()
        }
    }


    submit() {
        if (this.form.invalid) {
            return
        }

        this.submitted = true

        this.uSub = this.postsService.update({
            ...this.post,
            image: this.form.value.image,
            text: this.form.value.text,
            price: this.form.value.price,
            year: this.form.value.year,
            motor: this.form.value.motor,
            run: this.form.value.run,
            title: this.form.value.title
        }).subscribe(() => {
            this.submitted = false
        })
        this.alert.warning('Изменено')
    }
}
