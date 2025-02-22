import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-product',
  imports: [
    MatInputModule,
    CommonModule,
    MatIconModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
    public items = [
      {
        nome:"teste"
      },
      {
        nome:"teste"
      },
      {
        nome:"teste"
      },
      {
        nome:"teste"
      },
      {
        nome:"teste"
      },
      {
        nome:"teste"
      },
      {
        nome:"teste"
      },
      {
        nome:"teste"
      }
    ]
}
