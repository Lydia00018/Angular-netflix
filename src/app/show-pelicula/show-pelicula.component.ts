import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-pelicula',
  templateUrl: './show-pelicula.component.html',
  styleUrls: ['./show-pelicula.component.css']
})
export class ShowPeliculaComponent implements OnInit {
  detalle: any={};
  constructor(private  activatedRoute: ActivatedRoute, private _peliculasService: PeliculasService) { 
    this.activatedRoute.params.subscribe( params => {
    this._peliculasService.getDetails(params['id']).subscribe(datos => this.detalle=datos); 
   });
  }
  
  ngOnInit() {
  }

  }

