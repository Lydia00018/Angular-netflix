import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../services/peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
	peliculas:any[]=[];

  constructor(private _peliculasService: PeliculasService,
  			  private router: Router) { 

  }

  ngOnInit() {
  	this._peliculasService.getPeliculas().subscribe(datos => {
    this.peliculas = datos });
  }

}
