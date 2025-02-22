import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-banner',
  imports: [MatButtonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  private imageUrl: string = 'assets/imagens/background.jpg';
}
