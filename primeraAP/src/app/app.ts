import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly saludar = signal('SALUDOSO');
  protected readonly web = signal ('pagina');
  protected readonly saludo = signal ('saludos');
  protected readonly kiss = signal ('Beso o besos en la mejilla');
  protected readonly countries = signal ('paises');
  protected readonly marca = signal ('MIGUEL');
  protected readonly manos = signal ('APRETÓN DE MANOS');
  protected readonly beso = signal ('Beso');
}



