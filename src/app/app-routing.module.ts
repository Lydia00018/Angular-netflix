import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ShowPeliculaComponent } from './show-pelicula/show-pelicula.component';
import { ResultadosComponent } from './resultados/resultados.component';

import { InicioComponent } from './inicio/inicio.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { AboutComponent } from './about/about.component';
import { TerminosComponent } from './terminos/terminos.component';
import { LandingComponent } from './landing/landing.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { FormRegistroComponent } from './form-registro/form-registro.component';
import { DesplegableGenerosComponent } from './desplegable-generos/desplegable-generos.component';
import { LoginComponent} from './login/login.component';
import { ScrollComponent } from './scroll/scroll.component';
import { PeliculaScrollComponent } from './pelicula-scroll/pelicula-scroll.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
{path: 'inicio', component: InicioComponent},
{path: 'peliculas', component: PeliculasComponent},
{path: 'about', component: AboutComponent},
{path: 'terminos', component: TerminosComponent},
{path: 'privacidad', component: PrivacidadComponent},
{path: 'show-pelicula/:id',component: ShowPeliculaComponent},
{path: 'resultados/:nombre', component: ResultadosComponent},
{path: 'landing', component: LandingComponent},
{path: 'form-registro', component: FormRegistroComponent},
{path:'notfound', component: Error404Component},
{path:'generos', component: DesplegableGenerosComponent},
{path: 'login', component: LoginComponent},
{path:'scroll', component: ScrollComponent},
{path:'peliculaScroll', component: PeliculaScrollComponent},
{path: 'landing', component: LandingComponent},
{path:' ** ',pathMatch:'full', redirectTo:'notfound'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
