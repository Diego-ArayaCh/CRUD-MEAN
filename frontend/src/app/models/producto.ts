export class Producto{
    _id?:number;
    nombre:string;
    categoria:string;
    ubicacion:string;
    precio:number;

    constructor(id:number, nombre:string,  categoria:string,ubicacion:string, precio:number){

        this._id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.ubicacion = ubicacion;
        this.precio = precio;
        




    }
}