import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

    form: FormGroup;

    constructor() {
    }

    ngOnInit(): void {
        this.form = new FormGroup({
            name: new FormControl('', [Validators.required, Validators.minLength(3)]),
            email: new FormControl('', [Validators.required, Validators.email]),
            subject: new FormControl('',),
            phone: new FormControl('', [Validators.required, Validators.pattern('^[+ 0-9_-]{9,15}')]),
            message: new FormControl('', [Validators.required])
        });
    }

    submit() {
        console.log('Form submitted', this.form);
    }
}
