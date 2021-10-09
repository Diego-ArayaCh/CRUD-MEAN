import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';


@Injectable({
  providedIn: 'root'
})
export class ProductoService { //used for http requests
  url = 'https://mean-crud-products.herokuapp.com/api/productos/'
  constructor(private http: HttpClient) {


   }

getProductos():Observable<any>{

return this.http.get(this.url);


}

deleteProductos(id:string):Observable<any>{
  return this.http.delete(this.url+id);

}
createProductos(producto:Producto):Observable<any>{
  return this.http.post(this.url,producto);

}

getProducto(id:string):Observable<any>{

  return this.http.get(this.url + id);
}

updateProducto(id:string,producto:Producto):Observable<any>{
return this.http.put(this.url+id,producto);


}


/* updateProductos(id:string):Observable<any>{
  return this.http.put(this.url, id);

} */

}
