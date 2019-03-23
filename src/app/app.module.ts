import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { AboutComponent } from './about/about.component';
import { InicioComponent } from './inicio/inicio.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { LoginLogoutComponent } from './login-logout/login-logout.component';
import { CarrouselHomeComponent } from './carrousel-home/carrousel-home.component';
import { FooterComponent } from './footer/footer.component';
import { TerminosComponent } from './terminos/terminos.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { LogotipoComponent } from './logotipo/logotipo.component';
import { ShowImgPipe } from './pipes/show-img.pipe';
import { ShowPeliculaComponent } from './show-pelicula/show-pelicula.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { FormRegistroComponent } from './form-registro/form-registro.component';
import { Error404Component } from './error404/error404.component';
import { DesplegableGenerosComponent } from './desplegable-generos/desplegable-generos.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { ScrollComponent } from './scroll/scroll.component';
import { PeliculaScrollComponent } from './pelicula-scroll/pelicula-scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    PeliculasComponent,
    PeliculaComponent,
    AboutComponent,
    InicioComponent,
    BuscadorComponent,
    LoginLogoutComponent,
    CarrouselHomeComponent,
    FooterComponent,
    TerminosComponent,
    PrivacidadComponent,
    LogotipoComponent,
    ShowImgPipe,
    ShowPeliculaComponent,
    ResultadosComponent,
    FormRegistroComponent,
    Error404Component,
    DesplegableGenerosComponent,
    LandingComponent,
    LoginComponent,
    ScrollComponent,
    PeliculaScrollComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
