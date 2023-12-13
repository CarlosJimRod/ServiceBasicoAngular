import {Component, OnInit} from '@angular/core';
import {ProductosService} from "./services/productos.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  productos : any;

  constructor(private productsService : ProductosService) {
  }

  ngOnInit(){
    this.productos=this.productsService.getProductos()
  }
}
