import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  typeCI: string = 'Type of CI';

  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      CI: new FormControl('', [Validators.required, Validators.minLength(3)]),
      typeCI: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  ngOnInit(): void {
    // this.contactForm.valueChanges.subscribe((v) => console.log(v));
    this.contactForm
      .get('typeCI')
      ?.valueChanges.subscribe((v) => (this.typeCI = v));
  }

  hasErrors(control1Name: string, errorType: string) {
    return (
      this.contactForm.get(control1Name)?.hasError(errorType) &&
      this.contactForm.get(control1Name)?.touched
    );
  }

  onSubmit() {
    console.log(this.contactForm);
    // this.contactForm.reset();
  }
}
