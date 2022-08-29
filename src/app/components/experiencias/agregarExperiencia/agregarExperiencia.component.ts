import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from '../../../service/experiencia.service';
import { Experiencia } from '../../../model/experiencia.model';

@Component({
  selector: 'app-agregarExperiencia',
  templateUrl: './agregarExperiencia.component.html',
  styleUrls: ['./agregarExperiencia.component.css']
})
export class AgregarExperienciaComponent implements OnInit {

  nombreE: string = '';
  descE:string = '';
  fechaIE:string = '';
  fechaFE:string = '';


  constructor(private sExperiencia: ExperienciaService) { }

  ngOnInit() {
  }

  agregarExperiencia():void{
    const expe = new Experiencia(this.nombreE, this.descE, this.fechaIE, this.fechaFE);
    this.sExperiencia.save(expe).subscribe(
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
