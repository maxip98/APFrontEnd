import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HabilidadesService } from 'src/app/service/habilidades.service';
import { Habilidades } from '../../../model/habilidades.model';

@Component({
  selector: 'app-agregarHabilidad',
  templateUrl: './agregarHabilidad.component.html',
  styleUrls: ['./agregarHabilidad.component.css']
})
export class AgregarHabilidadComponent implements OnInit {

  nombreH:string = '';
  descH:string = '';
  porcentaje!:number;
  imgH:string = '';

  constructor(private sHabilidades: HabilidadesService) { }

  ngOnInit():void {
  }

  agregarHabilidad():void{
    const hab = new Habilidades(this.nombreH, this.imgH, this.porcentaje, this.descH);
    this.sHabilidades.save(hab).subscribe(
      data => {
        console.log("Experiencia agregada")
      }, err => {
        alert("Falló");
      }
    )

    setTimeout(this.funcion2,500);

  }

  funcion2(){
    location.reload()
}

}
