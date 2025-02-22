import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { DefaultButtonComponent } from '../default-button/default-button.component';

@Component({
  selector: 'app-product',
  imports: [
    MatInputModule,
    CommonModule,
    MatIconModule,
    DefaultButtonComponent
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
    public items = [
      {
        img:"images/logo.png",
        nome:"teste",
        descricao:"produto do bom!",
        tipo:"cilintrico",
        diametro:2,
        comprimento:2000
      },
      {
        img:"images/logo.png",
        nome:"teste",
        descricao:"produto do bom!",
        tipo:"cilintrico",
        diametro:2,
        comprimento:2000
      },{
        img:"images/logo.png",
        nome:"teste",
        descricao:"produto do bom!",
        tipo:"cilintrico",
        diametro:2,
        comprimento:2000
      },{
        img:"images/logo.png",
        nome:"teste",
        descricao:"produto do bom!",
        tipo:"cilintrico",
        diametro:2,
        comprimento:2000
      },{
        img:"images/logo.png",
        nome:"teste",
        descricao:"produto do bom!",
        tipo:"cilintrico",
        diametro:2,
        comprimento:2000
      },{
        img:"images/logo.png",
        nome:"teste",
        descricao:"produto do bom!",
        tipo:"cilintrico",
        diametro:2,
        comprimento:2000
      },{
        img:"images/logo.png",
        nome:"teste",
        descricao:"produto do bom!",
        tipo:"cilintrico",
        diametro:2,
        comprimento:2000
      },{
        img:"images/logo.png",
        nome:"teste",
        descricao:"produto do bom!",
        tipo:"cilintrico",
        diametro:2,
        comprimento:2000
      }
    ]
}
