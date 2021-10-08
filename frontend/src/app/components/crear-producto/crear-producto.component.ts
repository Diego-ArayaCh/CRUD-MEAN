import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';



@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  //properties
  productoForm: FormGroup;
  titulo= 'Crear Producto';
id: string | null;


  constructor(private fb: FormBuilder,
     private router: Router,
     private toastr: ToastrService,
     private _productoService: ProductoService,
     private aRoute: ActivatedRoute) {
    this.productoForm = this.fb.group({  //build a form 
      nombre: ['', Validators.required],
      categoria: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required],
    });
    this.id = this.aRoute.snapshot.paramMap.get('id');

   
   }

  ngOnInit(): void {
    this.esEditar();
  }
//methods
  agregarProducto(){

    console.log(this.productoForm);//productForm is a form that is in the file html


    const PRODUCTO:Producto = {
        nombre: this.productoForm.get('nombre')?.value,
        categoria: this.productoForm.get('categoria')?.value,
        ubicacion: this.productoForm.get('ubicacion')?.value,
        precio: this.productoForm.get('precio')?.value
    };

if (this.id !== null) {
  //update
this._productoService.updateProducto(this.id, PRODUCTO).subscribe(data =>{

  this.toastr.info('The product was updated successfully', 'Product Updated');
  this.router.navigate(['/']);




}, err => {

  console.log(err);

});





}else{
//create
this._productoService.createProductos(PRODUCTO).subscribe(data => {
  this.toastr.success('The product was created successfully', 'Product Created');
  this.router.navigate(['/']);
  this.productoForm.reset()
 
}, err => {

  console.log(err);

});

}




    
  
  }
  esEditar() {

    if(this.id !== null) {
      this.titulo = 'Editar producto';
      this._productoService.getProducto(this.id).subscribe(data => {
        console.log(data.nombre);
        this.productoForm.setValue({
          nombre: data.nombre,
          categoria: data.categoria,
          ubicacion: data.ubicacion,
          precio: data.precio,
        })
     /*    this.productoForm.controls['nombre'].setValue(data.nombre);
        this.productoForm.controls['categoria'].setValue(data.categoria);
        this.productoForm.controls['ubicacion'].setValue(data.ubicacion);
        this.productoForm.controls['precio'].setValue(data.precio); */
      })
    }
  }
}
