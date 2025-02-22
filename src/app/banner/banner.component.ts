import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { DefaultButtonComponent } from "../default-button/default-button.component";

@Component({
  selector: 'app-banner',
  imports: [
    MatButtonModule, 
    DefaultButtonComponent,
    DefaultButtonComponent
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  private imageUrl: string = 'assets/imagens/background.jpg';
}
