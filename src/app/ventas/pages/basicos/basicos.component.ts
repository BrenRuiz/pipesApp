import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: []
})
export class BasicosComponent {
  nombreLower: string = 'brenda';
  nombreUpper: string = 'BRENDA';
  nombreCompleto: string = 'brEndA rUIz';

  fecha: Date = new Date(); //el día de hoy 
}

