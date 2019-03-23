import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ComprobarPass } from '../Comprobaciones/comprobar-pass.validator';


@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent implements OnInit {
  formularioRegistro: FormGroup;
   enviado = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.formularioRegistro = this.formBuilder.group({
            nombre: ['', Validators.required],
            apellido1: ['', Validators.required],
            apellido2: [''],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required]
        }, {
            validator: ComprobarPass('password', 'confirmPassword')
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.formularioRegistro.controls; }

    onSubmit() {
        this.enviado = true;

        // stop here if form is invalid
        if (this.formularioRegistro.invalid) {
            return;
        }
}

}
