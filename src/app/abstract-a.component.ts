import { Input } from '@angular/core';

export abstract class AbstractAComponent {
  @Input() myInput: string;
}
