import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desplegable-generos',
  templateUrl: './desplegable-generos.component.html',
  styleUrls: ['./desplegable-generos.component.css']
})
export class DesplegableGenerosComponent implements OnInit {


  mostrar: boolean = false;
  isVisible:boolean=false;

  constructor() { }




  ngOnInit() {
  }

}
