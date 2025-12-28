import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { of } from 'rxjs';

function mustContainQuestionMark(control: AbstractControl) {
  if (control.value.includes('?')) {
    return null;
  }
  return { doesNotContainQuestionMark: true };
}

function emailIsUnique(control: AbstractControl) {
  if (control.value.email !== 'test@example.com') {
    return of(null);
  }
  return of({ notUnique: true });
}

let initialEmailValue = '';
const savedForm = window.localStorage.getItem('saved-login-details');

if(savedForm){
  const loadedForm = JSON.parse(savedForm);    
  initialEmailValue = loadedForm.email;  
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  form = new FormGroup({
    email: new FormControl(initialEmailValue, {
      validators: [Validators.required, Validators.email],
      asyncValidators: [emailIsUnique],
    }),
    password: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(6),
        mustContainQuestionMark,
      ],
    }),
  });

  get emailIsInvalid() {
    return (
      this.form.controls.email.invalid &&
      this.form.controls.email.touched &&
      this.form.controls.email.dirty
    );
  }

  get passwordIsInvalid() {
    return (
      this.form.controls.password.invalid &&
      this.form.controls.password.touched &&
      this.form.controls.password.dirty
    );
  }

  ngOnInit() {
    // const savedForm = window.localStorage.getItem('saved-login-details');

    // if(savedForm){
    //   const loadedForm = JSON.parse(savedForm);
    //   this.form.patchValue({
    //     email:loadedForm.email
    //   })
    // }
    const subscription = this.form.valueChanges.pipe().subscribe({
      next: (value) => {
        window.localStorage.setItem(
          'saved-login-details',
          JSON.stringify({ email: value.email })
        );
      },
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    })
  }

  onSubmit() {
    console.log(this.form);
    const email = this.form.value.email;
    const password = this.form.value.password;
    console.log(email, password);
  }
}
