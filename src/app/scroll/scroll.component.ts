import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../services/peliculas.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css']
})
export class ScrollComponent implements OnInit {

  peliculas:any[]=[];
  
  
   genero:any[] = [
     "Comedia",
     "Acción",
     "Fantasía"
   ]

  constructor(private _peliculasService: PeliculasService,
  			  private router: Router) { }

  ngOnInit() {
	this._peliculasService.getMoviesByGenero(this.genero[0]).subscribe(datos => {
    this.peliculas = datos });
  }



  
}
