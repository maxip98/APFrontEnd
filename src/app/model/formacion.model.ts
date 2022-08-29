export class Formacion{
    id?: number;
    nombreF: string;
    descF:string;
    fechaIF:string;
    fechaFF:string;

    constructor( nombreF:string, descF:string, fechaIF:string, fechaFF:string){
        this.nombreF = nombreF;
        this.descF = descF;
        this.fechaIF = fechaIF;
        this.fechaFF = fechaFF;
    }
 
}