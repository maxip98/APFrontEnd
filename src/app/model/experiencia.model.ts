export class Experiencia {
    id? : number;
    nombreE : string;
    descripcionE : string;
    fechaIE:string;
    fechaFE:string;

    constructor(nombreE: string, descripcionE: string, fechaIE:string, fechaFE:string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.fechaIE = fechaIE;
        this.fechaFE = fechaFE;
    }
}

