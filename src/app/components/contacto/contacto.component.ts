import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../service/persona.service';
import { Persona } from '../../model/persona.model';
import { from, range } from 'rxjs';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  infoPersonal: Persona[] = [];

  numero = [1,3,6]



  constructor(public sPersonas: PersonaService) { }

  ngOnInit() {
    this.cargarPersonas();
  }

  cargarPersonas():void {
    this.sPersonas.lista().subscribe(data => { this.infoPersonal = data});
  }



    



  }

