import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {
  experiencias: Experiencia[] = [];

  id:number;

  nombre:string;

  desc:string;

  fechaI:string;

  fechaF:string;

  @ViewChild('nombreE') nuevoNombreE:ElementRef;
  @ViewChild('descE') nuevoDescE:ElementRef;
  @ViewChild('fechaIEF') nuevoFechaIE:ElementRef;
  @ViewChild('fechaFE') nuevoFechaFE:ElementRef;

  constructor(public sExperiencias: ExperienciaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit() {
    this.cargarExperiencias();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencias():void{
    this.sExperiencias.lista().subscribe(data => { this.experiencias = data});
  }

  guardarDatos(id:number, nombre:string, desc:string, fechaI:string, fechaF:string):void{
    this.id = id;
    this.nombre = nombre;
    this.desc = desc;
    this.fechaI = fechaI;
    this.fechaF = fechaF;
    console.log(`el id es ${this.id}, el nombre es ${this.nombre}, la desc es ${this.desc}`)
  }

  borrarExperiencia(){
    this.sExperiencias.delete(this.id).subscribe(
      data => {
        console.log('La Experiencia fue borrada');
      }, err => {
        alert("No se pudo borrar la experiencia");
      }
    )
    setTimeout(this.funcionRecargar,1000);
  }

  editarExperiencia():void{
    const experienciaModificada: Experiencia = {
      nombreE: '',
      descripcionE: '',
      fechaIE: '',
      fechaFE: ''
    }

    experienciaModificada.nombreE = this.nuevoNombreE.nativeElement.value;

    experienciaModificada.descripcionE = this.nuevoDescE.nativeElement.value;

    experienciaModificada.fechaIE = this.nuevoFechaIE.nativeElement.value;

    experienciaModificada.fechaFE = this.nuevoFechaFE.nativeElement.value;

    console.log(experienciaModificada.nombreE);

    this.sExperiencias.update(this.id, experienciaModificada).subscribe(
      data => {
        console.log('Experiencia moficada');
      }, err =>{
        alert("Error al modificar experiencia o no tienes los privilegios de administrador");
      }
    )

    setTimeout(this.funcionRecargar,1000);

  }

  funcionRecargar(){
    location.reload()
  }

}
