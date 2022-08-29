import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  personas: Persona[] = [];

  idN:number;


  
  @ViewChild('nombreP') nuevoNombre:ElementRef;
  @ViewChild('lugarP') nuevoLugar:ElementRef;
  @ViewChild('tituloP') nuevoTitulo:ElementRef;
  @ViewChild('imagenP') nuevoImagen:ElementRef;
  @ViewChild('emailP') nuevoEmail:ElementRef;
  @ViewChild('telefonoP') nuevoTelefono:ElementRef;
  @ViewChild('descripcionP') nuevoDescripcion:ElementRef;  
  
  constructor(public sPersonas: PersonaService, private tokenService: TokenService) { 
  }

  isLogged = false;

  ngOnInit(): void {
    this.cargarPersonas();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPersonas():void {
    this.sPersonas.lista().subscribe(data => { this.personas = data});
  }

  guardarDatos(id:number){
    this.idN = id;
    console.log(this.idN)
  }


  funcionEditar():void{
    const personaModificada: Persona = {
      nombreP: '',
      lugarP: '',
      imgP: '',
      descP: '',
      telefonoP: '',
      emailP: '',
      tituloP: ''
    };

    personaModificada.nombreP = this.nuevoNombre.nativeElement.value;
    console.log(personaModificada.nombreP);

    personaModificada.lugarP = this.nuevoLugar.nativeElement.value;

    personaModificada.imgP = this.nuevoImagen.nativeElement.value;

    personaModificada.descP = this.nuevoDescripcion.nativeElement.value;

    personaModificada.telefonoP = this.nuevoTelefono.nativeElement.value;

    personaModificada.emailP = this.nuevoEmail.nativeElement.value;

    personaModificada.tituloP = this.nuevoTitulo.nativeElement.value;

    this.sPersonas.update(this.idN, personaModificada).subscribe(
      data => {
        console.log('Datos enviados');
        setTimeout(this.funcion2,1000);
      }, err =>{
         alert("Error al modificar datos personales o no tienes los privilegios de administrador");
      }
    )
  }

    funcion2(){
      location.reload()
  }



}
