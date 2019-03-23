import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  constructor(private router: Router) { }
  isVisible:boolean=false;
  ngOnInit() {
  }

  verResultados(nombre: String) {
    console.log(nombre);
    this.router.navigate( ['/resultados', nombre] );
  }

}
