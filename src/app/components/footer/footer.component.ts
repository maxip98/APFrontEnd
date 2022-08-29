import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  FPersonal: Persona[] = [];

  constructor(public sPersonas: PersonaService) { }

  ngOnInit(): void {
    this.cargarPersonas();
  }

  cargarPersonas():void {
    this.sPersonas.lista().subscribe(data => { this.FPersonal = data});
  }

}
