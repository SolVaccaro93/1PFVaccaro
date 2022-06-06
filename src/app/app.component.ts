import { Component } from '@angular/core';
import { Courses } from './Interfaces/courses.interface';
import { Student } from './Interfaces/student.interface';
import { User } from './Interfaces/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PrimerPFVaccaro';

  isLoggedIn: boolean = false;
  viewOption: string = 'home'; //Propiedad que define el componente a renderizar

  userData!:User 
  addUser:boolean = false;
  studentToEdit!:Student|null; //Propiedad que utilizamos para pasar los datos del estudiante a editar
  courseToEdit!: Courses|null; //Propiedad que utilizamos para pasar el curso a editar
  userToEdit!: User|null; //Propiedad que utilizamos para pasar los datos del usuario a editar
  studentToInscribe!:Student; //Propiedad que utilizamos para pasar el estudiante a la inscripcion de cursos

  users:User[] = [ //Datos de usuarios para login
    { id:1, username: 'admin', password: 'admin123', rol: 'admin' },
    { id:2, username: 'usuario', password: 'usuario123', rol: 'user' }
  ];
  courses: Courses[] = [ //Datos de los cursos a listar que se envian al componente coursesList
    {id:1, course: 'Angular'},
    {id:2, course: 'Java'},
    {id:3, course: 'NodeJS'},
    {id:4, course: 'Python'},
    {id:5, course: 'React'},
    {id:6, course: 'Javascript'},
    {id:7, course: 'UX/UI'},
  ];    
  studentsData: Student[] = [ //Datos de los estudiantes que se envía al componente StudentsList
    {id: 1, name: 'Sol', lastname: 'Vaccaro', email: 'vaccaro.marisol93@gmail.com', cursos: ['Angular']},
    {id: 2, name: 'Rodrigo', lastname: 'Del Portico', email: 'rpportico@gmail.com', cursos: ['React', 'Node-JS']},
    {id: 3, name: 'Jeremy', lastname: 'Andes', email: 'jandes@gmail.com', cursos: ['React', 'Node-JS']},
    {id: 4, name: 'Antonio', lastname: 'Nicolas', email: 'tony@gmail.com', cursos: ['Python', 'Pandas']},        
  ]; 

  //METODOS

  checkLogin(e:User) { //Asigno los datos del usuario logueado
    this.isLoggedIn = true;
    this.userData = e
  }

  logout(e:boolean) {
    this.isLoggedIn = e
  }

  onViewOption(option: string) { //Recibe el evento y setea el componente a renderizar
    this.viewOption = option
    this.studentToEdit = null
    this.courseToEdit = null
    this.userToEdit = null
  }



  


  onAddStudent(e:Student) { //En este metodo se hace un update de los estudiantes y además que se modifica el id manualmente por el front
    let index=1;
    if(this.studentsData.length>0){
      index=this.studentsData.length+1;
      e['id']=index;
      this.studentsData.push(e);
    }else{
      e['id']=index;
      this.studentsData.push(e)
    }
    this.viewOption = 'home'
  }

  onPassEditStudent(e:Student) { //Le asignamos al studentToedit los datos del estudiante a editar y pasa a formulario
    if(e) {
      this.viewOption = 'add-student'
      this.studentToEdit = e;
    }
  }

  onStudentEdit(e:Student){
    /*Una vez editado, se busca en la data que se le pasa a la tabla, cual es el elemento editado
    Y le cambia el valor*/
    let index=this.studentsData.findIndex((x:Student)=>x.id===e.id);
    this.studentsData[index]=e;
    this.viewOption = 'home'
  }

  onUpdateDeleteStudents(el:any) {
    /* Una vez editado por el delete, 
    se modifican los ids (para evitar errores en delete) y ademas hace un update del valor de data */
    el.forEach((el:any,index:number)=>{
      el['id']=index+1
    })
    this.studentsData=el;
  }

  onAddCourse(e:Courses) { //En este metodo se hace un update de los cursos y además que se modifica el id manualmente por el front
    let index=1;
    if(this.courses.length>0){
      index=this.courses.length+1;
      e['id']=index;
      this.courses.push(e);
    }else{
      e['id']=index;
      this.courses.push(e)
    }
    this.viewOption = 'courses'
  }

  onPassEditCourse(e:Courses) { //Le asignamos al courseToedit los datos del curso a editar y pasa a formulario
    if(e) {
      this.viewOption = 'add-course'
      this.courseToEdit = e;
    }
  }

  onCourseEdit(e:Courses){
    /*Una vez editado, se busca en la data que se le pasa a la tabla, cual es el elemento editado
    Y le cambia el valor*/
    let index=this.courses.findIndex((x:Courses)=>x.id===e.id);
    this.courses[index]=e;
    this.viewOption = 'courses'
  }

  onUpdateDeleteCourses(courses:any) {
    /* Una vez editado por el delete, 
    se modifican los ids (para evitar errores en delete) y ademas hace un update del valor de data */
    courses.forEach((el:any,index:number)=>{
      el['id']=index+1
    })
    this.courses=courses;
  }

  onAddUser(user:User) { //Este metodo hace el update de los users de la aplicacion
    this.users.push(user)
    this.viewOption = 'users'
  }

  onPassEditUser(e:User) { //Le asignamos al studentToedit los datos del estudiante a editar y pasa a formulario
    if(e) {
      this.viewOption = 'add-user'
      this.userToEdit = e;
    }
  }

  onUserEdit(e:User){
    /*Una vez editado, se busca en la data que se le pasa a la tabla, cual es el elemento editado
    Y le cambia el valor*/
    let index=this.users.findIndex((x:User)=>x.id===e.id);
    this.users[index]=e;
    this.viewOption = 'users'
  }

  onUpdateDeleteUsers(el:any) {
    /* Una vez editado por el delete, 
    se modifican los ids (para evitar errores en delete) y ademas hace un update del valor de data */
    el.forEach((el:any,index:number)=>{
      el['id']=index+1
    })
    this.users=el;
  }

  onPassAddInscription(student:Student) {
    this.viewOption = 'add-inscription'
    this.studentToInscribe = student
  }

  onAddInscription(student:Student) {
    this.viewOption = 'home'
    let index=this.studentsData.findIndex((x:Student)=>x.id===student.id);
    this.studentsData[index]=student;
  }

}
