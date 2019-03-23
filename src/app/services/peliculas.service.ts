import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
	urlApi='http://localhost:3000';

  constructor(private http:HttpClient) { }
  getPeliculas(){
  	const peli=`${this.urlApi}/peliculas`;
  	return this.http.get<any[]>(peli);
  }

  getDetails(id){
    const peli=`${this.urlApi}/pelicula/${id}`;
  	return this.http.get<any[]>(peli);
  }
  
  getMoviesByTitle(title) {
    const byTitle = `${this.urlApi}/peliculas/buscar/${title}`;
    return this.http.get<any[]>(byTitle);
  }

  getMoviesByGenero(genero) {
    const Bygenero = `${this.urlApi}/peliculas/related/${genero}`;
    return this.http.get<any[]>(Bygenero);
  }



}
