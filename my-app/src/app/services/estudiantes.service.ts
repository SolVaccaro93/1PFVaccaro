import { Injectable } from '@angular/core';
import { Estudiantes } from 'src/app/interfaces/estudiantes';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  //array de estudiantes harcodeado
  ListaEstudiantes: Estudiantes[] = [
    { nombre: "Sol", apellido: "Vaccaro", curso: 'Angular', nota:7, profesor: 'Perez' },
    { nombre: "Juan", apellido: "Rodriguez", curso: 'Angular', nota: 9, profesor: 'Lopez' },
    { nombre: "Juana", apellido: "Molina", curso: 'Vue', nota: 6, profesor: 'Rosetti' },
    { nombre: "Hector", apellido: "Rattis", curso: 'Devops', nota: 1, profesor: 'Maldonado' },
    { nombre: "David", apellido: "Cabrera", curso: 'UX', nota: 4, profesor: 'Del Portico' },
    { nombre: "Maxi", apellido: "Pelossi", curso: 'React', nota: 6, profesor: 'Lopez' },
    { nombre: "Santi", apellido: "Requelme", curso: 'React', nota: 10, profesor: 'Lopez' },
    { nombre: "Juana", apellido: "Suarez", curso: 'Angular', nota: 3, profesor: 'Martinez' },
    { nombre: "Brenda", apellido: "Molina", curso: 'UX/IO', nota: 8, profesor: 'Maldonado' },
    { nombre: "Alejandro", apellido: "Villani", curso: 'Python', nota: 7, profesor: 'Rubius' },
    { nombre: "Emanuel", apellido: "Villani", curso: 'Angular', nota: 0, profesor: 'Lopez' },
    { nombre: "Luciana", apellido: "Rodriguez", curso: 'Diseño Web', nota: 5, profesor: 'Spinetta' },

  ];
  constructor() { }

  //metodo get para lista de estudiantes
  getEstudiantes() {
    return this.ListaEstudiantes.slice();
  }
  //!metodo para eliminar estudiante
  eliminarEstudiante(index: number) {
    this.ListaEstudiantes.splice(index, 1);
  }
  //?metodo para editar estudiante
  editarEstudiante(estudiante: Estudiantes, index: number) {
    this.ListaEstudiantes[index] = estudiante;
  }
  //*metodo para agregar estudiante
  agregarEstudiante(estudiante: Estudiantes) {
    this.ListaEstudiantes.unshift(estudiante);

  }
}


