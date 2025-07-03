import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boas-vindas',
  imports: [],
  templateUrl: './boas-vindas.component.html',
  styleUrl: './boas-vindas.component.css'
})
export class BoasVindasComponent {

  constructor(private router: Router) {}

  voltarHome() {
    this.router.navigate(['/']);
  }
}
