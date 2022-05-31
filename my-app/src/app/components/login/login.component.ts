import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loading: boolean = false;


  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) //creacion de formulario para ingreso
  {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      contraseña: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  
  ingresar() {
    
    const usuario = this.form.value.usuario;
    const contraseña = this.form.value.contraseña;


    if (usuario === 'admin' && contraseña === 'admin123') {

      this.cargando();

    } else {
      this.error();
      this.form.reset();
    }
  }
  //captura de error para mostrar en pantalla
  error() {
    this._snackBar.open('Usuario o contraseña incorrecta', '', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 2000,
    })
  }

  cargando() {
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['dashboard']);
    }, 150);
  }

}
