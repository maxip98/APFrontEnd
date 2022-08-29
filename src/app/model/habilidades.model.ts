export class Habilidades{
    id?: number;
    nombreH: string;
    imgH: string;
    porcentaje: number;
    descH:string;

    constructor( nombreH:string, imgH:string, porcentaje:number, descH:string){
        this.nombreH = nombreH;
        this.imgH = imgH;
        this.porcentaje = porcentaje;
        this.descH = descH;

    }
    
}