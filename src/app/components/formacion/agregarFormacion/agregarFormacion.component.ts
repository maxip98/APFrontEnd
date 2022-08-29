import { Component, OnInit } from '@angular/core';
import { FormacionService } from 'src/app/service/formacion.service';
import { Formacion } from '../../../model/formacion.model';

@Component({
  selector: 'app-agregarFormacion',
  templateUrl: './agregarFormacion.component.html',
  styleUrls: ['./agregarFormacion.component.css']
})
export class AgregarFormacionComponent implements OnInit {

  nombreF:string = '';
  descF:string = '';
  fechaIF:string = '';
  fechaFF:string = '';

  constructor(private sFormacion: FormacionService) { }

  ngOnInit() {
  }

  agregarFormacion():void{
    const forma = new Formacion(this.nombreF, this.descF, this.fechaIF, this.fechaFF);
    this.sFormacion.save(forma).subscribe(
      data => {
        console.log("Formacion agregada")
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
