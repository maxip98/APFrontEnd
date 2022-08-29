import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Formacion } from 'src/app/model/formacion.model';
import { FormacionService } from 'src/app/service/formacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {
  formacion: Formacion[] = [];

  id:number;

  nombre:string;

  desc:string;

  fechaI:string;

  fechaF:string;

  @ViewChild('nombreF') nuevoNombre:ElementRef;
  @ViewChild('descF') nuevoDesc:ElementRef;
  @ViewChild('fechaIF') nuevoFechaIF:ElementRef;
  @ViewChild('fechaFF') nuevoFechaFF:ElementRef;

  constructor(public sFormacion: FormacionService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit() {
    this.cargarFormacion();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarFormacion():void{
    this.sFormacion.lista().subscribe(data => {this.formacion = data});
  }

  guardarDatos(id:number, nombre:string, desc:string, fechaI:string, fechaF:string):void{
    this.id = id;
    this.nombre = nombre;
    this.desc = desc;
    this.fechaI = fechaI;
    this.fechaF = fechaF;
    console.log(`el id es ${this.id}, el nombre es ${this.nombre}, la desc es ${this.desc}`)
  }

  borrarFormacion(){
    this.sFormacion.delete(this.id).subscribe(
      data => {
        console.log('La habilidad fue borrada');
      }, err => {
        alert("No se pudo borrar la experiencia");
      }
    )
    setTimeout(this.funcionRecargar,1000);
  }

  editarFormacion():void{
    const formacionModificada: Formacion = {
      nombreF: '',
      descF: '',
      fechaIF: '',
      fechaFF: ''
    }

    formacionModificada.nombreF = this.nuevoNombre.nativeElement.value;

    formacionModificada.descF = this.nuevoDesc.nativeElement.value;

    formacionModificada.fechaIF = this.nuevoFechaIF.nativeElement.value;

    formacionModificada.fechaFF = this.nuevoFechaFF.nativeElement.value;

    this.sFormacion.update(this.id, formacionModificada).subscribe(
      data => {
        console.log('Formacion moficada');
      }, err =>{
        alert("Error al modificar formacion o no tienes los privilegios de administrador");
      }
    )

    setTimeout(this.funcionRecargar,1000);

  }

  funcionRecargar(){
    location.reload()
  }
}
