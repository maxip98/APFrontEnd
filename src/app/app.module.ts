import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { interceptorProvider } from './service/interceptor-service';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { AgregarHabilidadComponent } from './components/habilidades/agregar-habilidad/agregarHabilidad.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { FormacionComponent } from './components/formacion/formacion.component';
import { AgregarFormacionComponent } from './components/formacion/agregarFormacion/agregarFormacion.component';
import { AgregarExperienciaComponent } from './components/experiencias/agregarExperiencia/agregarExperiencia.component';
import { ContactoComponent } from './components/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    HabilidadesComponent,
    AgregarHabilidadComponent,
    ExperienciasComponent,
    FormacionComponent,
    AgregarFormacionComponent,
    ExperienciasComponent,
    AgregarExperienciaComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
