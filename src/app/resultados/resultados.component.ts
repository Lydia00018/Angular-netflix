import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
  peliculas:any[];
  notFound:Boolean = false;
  constructor(private _peliculasServices:PeliculasService, private _activatedRoute:ActivatedRoute) {
    // this._activatedRoute.params.subscribe( params => {
    //   this._peliculasServices.getMoviesByTitle(params['nombre']).subscribe(data => {
    //     if(data.length >= 1){ 
    //       this.peliculas = data;
    //       this.notFound = false;
    //     }else {
    //       this.notFound = true;
    //     }
        
    //   })
    // })
   }

  ngOnInit() {
    this._activatedRoute.params.subscribe( params => {
      this._peliculasServices.getMoviesByTitle(params['nombre']).subscribe(data => {
        if(data.length >= 1){ 
          this.peliculas = data;
          this.notFound = false;
        }else {
          this.peliculas = [];
          this.notFound = true;
        }
        
      })
    })
  }

}
