import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BannerComponent } from '../banner/banner.component';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    BannerComponent,
    ProductComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
