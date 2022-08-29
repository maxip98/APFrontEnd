import { AfterContentInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { range } from 'rxjs';
import { Habilidades } from 'src/app/model/habilidades.model';
import { HabilidadesService } from 'src/app/service/habilidades.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit, AfterContentInit {
  habilidades: Habilidades[] = [];

  idG:number;

  nombreG:string;

  imgG:string;

  porcentajeG:number;

  descG:string;

  porcentajeC:number;

  @ViewChild('nombreH') nuevoNombre:ElementRef;
  @ViewChild('imgH') nuevoImg:ElementRef;
  @ViewChild('porcentajeH') nuevoPorcentaje:ElementRef;
  @ViewChild('descH') nuevoDesc:ElementRef;

  constructor(public sHabilidades: HabilidadesService, private tokenService: TokenService) { 
  }
  
  ngAfterContentInit(): void {
  }
  
  isLogged = false;
  
  ngOnInit() {
    this.cargarHabilidades();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }    
  }
  
  cargarHabilidades():void {
    this.sHabilidades.lista().subscribe(data => { this.habilidades = data});
  }
  
  guardarDatos(id:number,nombre:string, img:string, porcentaje:number, desc:string):void{
    this.idG = id;
    this.nombreG = nombre;
    this.imgG = img;
    this.porcentajeG = porcentaje;
    this.descG = desc;
    console.log(`el id es ${this.idG}, el nombre es ${this.nombreG}, la imagen es ${this.imgG}`)
  }
  
  borrarHabilidad(){
      this.sHabilidades.delete(this.idG).subscribe(
        data => {
          console.log('La habilidad fue borrada');
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
      setTimeout(this.funcionRecargar,1000);
    }

  editarHabilidad():void{
    const habilidadModificada: Habilidades = {
      nombreH: '',
      imgH: '',
      porcentaje: 0,
      descH: ''
    }
    
    habilidadModificada.nombreH = this.nuevoNombre.nativeElement.value;

    habilidadModificada.imgH = this.nuevoImg.nativeElement.value;

    habilidadModificada.porcentaje = this.nuevoPorcentaje.nativeElement.value;

    habilidadModificada.descH = this.nuevoDesc.nativeElement.value;

    this.sHabilidades.update(this.idG, habilidadModificada).subscribe(
      data => {
        console.log('Habilidad moficada');
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