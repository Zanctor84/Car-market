import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Post} from '../../shared/interfaces';
import {PostsService} from '../../shared/posts.service';
import {AlertService} from '../shared/services/alert.service';
import {NgbTypeaheadConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-create-page',
    templateUrl: './create-page.component.html',
    styleUrls: ['./create-page.component.scss']
})

export class CreatePageComponent implements OnInit {

    form: FormGroup;
    public imagePath;
    imgURL: any;
    public model: any;

    constructor(private postsService: PostsService,
                config: NgbTypeaheadConfig,
                private alert: AlertService) {

        config.showHint = true;
    }


    ngOnInit() {
        this.form = new FormGroup({
            title: new FormControl(null, Validators.required),
            text: new FormControl(null, Validators.required),
            price: new FormControl(null, Validators.required),
            sale: new FormControl(null),
            year: new FormControl(null, Validators.required),
            motor: new FormControl(null, Validators.required),
            run: new FormControl(null, Validators.required),
            author: new FormControl(null, Validators.required),
            image: new FormControl(null, Validators.required)
        })
    }

    preview(files) {
        if (files.length === 0)
            return;


        var reader = new FileReader();
        this.imagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = (_event) => {
            this.imgURL = reader.result;
        }
    }


    onSubmit() {

    }

    submit() {
        if (this.form.invalid) {
            return
        }

        const post: Post = {
            title: this.form.value.title,
            text: this.form.value.text,
            sale: this.form.value.sale,
            price: this.form.value.price,
            year: this.form.value.year,
            motor: this.form.value.motor,
            run: this.form.value.run,
            author: this.form.value.author,
            image: this.form.value.image,
            date: new Date()
        }


        this.postsService.create(post).subscribe(() => {
            this.form.reset()
            this.alert.success('Успешно создан')
        })
        // console.log(post)
    }

}
