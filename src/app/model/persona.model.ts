export class Persona{
    id?: number;
    nombreP: string;
    lugarP: string;
    imgP: string;
    descP: string;
    telefonoP:string;
    emailP:string;
    tituloP:string;

    constructor( nombreP:string, lugarP:string, imgP:string, descP:string,telefonoP:string, emailP:string, tituloP:string){
            this.nombreP = nombreP;
            this.lugarP = lugarP;
            this.imgP = imgP;
            this.descP = descP;
            this.telefonoP = telefonoP;
            this.emailP = emailP;
            this.tituloP = tituloP;
        }
    
}