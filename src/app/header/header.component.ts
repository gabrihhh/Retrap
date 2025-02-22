import { Component, EventEmitter, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { NavComponent } from "../nav/nav.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    MatIconModule,
    NavComponent,
    CommonModule
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public navIsOpen = false

  public toggleNavegacao(){
    this.navIsOpen = !this.navIsOpen
  }
}
