import { Component, OnInit, Input } from '@angular/core';
import { PeliculasService } from '../services/peliculas.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pelicula-scroll',
  templateUrl: './pelicula-scroll.component.html',
  styleUrls: ['./pelicula-scroll.component.css']
})
export class PeliculaScrollComponent implements OnInit {
  
  constructor(private router: Router) { }
  @Input() movie:any;

  ngOnInit() {
  }


  idDetallePelicula(id:number){

    this.router.navigate(['/show-pelicula',id]);
  }

}
