import { NavigationExtras, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EstudiantesService } from './../../services/estudiantes.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Estudiantes } from 'src/app/interfaces/estudiantes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  opened = false;
  //**hijo **/  

  admin: boolean = false;


  listaEstudiantes: Estudiantes[] = [];

  displayedColumns: string[] = ['nombre', 'curso', 'nota', 'profesor', 'acciones'];

  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private _estudiantesService: EstudiantesService, private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.loadView(); //metodo de carga peresosa de datos 
  }

  loadView() {
    this.cargarEstudiantes();
  }
  //metodo de carga de estudiantes-- llena la tabla con los datos de la base de datos
  cargarEstudiantes() {
    this.listaEstudiantes = this._estudiantesService.getEstudiantes();
    this.dataSource = new MatTableDataSource(this.listaEstudiantes);
  }
  //metodo importado de paginador para tabla
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
  }
  //metodo para filtrado de busqueda dentro de la tabla
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  //metodo de eliminacion de estudiante directo a la tabla.
  eliminarEstudiante(index: number) {
    console.log(index);
    this._estudiantesService.eliminarEstudiante(index);
    this.cargarEstudiantes();
    this._snackBar.open('Registro de estudiante eliminado', '', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 1500,
    })
  }

  //?metodo para llevar a la vista de detalle del estudiante y editarlo
  editarEstudiante(index: number) {
    console.log(index);
    const navigationExtras: NavigationExtras = {
      state: {
        estudiante: this.listaEstudiantes[index]
      }
    }
    this.router.navigate(['/dashboard/crear-estudiante'], navigationExtras);



  }

  //metodo para ingresar a la vista con botones de edicion y eliminacion de datos
  ingresarAdmin() {
    this.admin = true;
  }
  //metodo para ingresar a la vista con permisos de usuario, solo para leer datos
  ingresarUsuario() {
    this.admin = false;
  }

}
