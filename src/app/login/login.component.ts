import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ComprobarPass } from '../Comprobaciones/comprobar-pass.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	login: boolean = false;
	formularioLogin: FormGroup;
	enviado = false;
  constructor(private formBuilder: FormBuilder) { }

      ngOnInit() {
        this.formularioLogin = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

        get f() { return this.formularioLogin.controls; }

        onSubmit() {
        this.enviado = true;

        // stop here if form is invalid
        if (this.formularioLogin.invalid) {
            return;
        }
}

}
