import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {


  constructor(private router: Router) { }
  @Input() movie:any;


  ngOnInit() {
  }


  idDetallePelicula(id:number){

    this.router.navigate(['/show-pelicula',id]);
  }


}
