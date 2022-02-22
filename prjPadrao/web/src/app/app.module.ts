import { FormsModule } from '@angular/forms';
import { ApicadastroService } from 'src/app/services/apicadastro/apicadastro.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NovidadesComponent } from './components/novidades/novidades.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { LiveComponent } from './components/live/live.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NovidadesComponent,
    CadastroComponent,
    FooterComponent,
    LoginComponent,
    LiveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IvyCarouselModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ApicadastroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
