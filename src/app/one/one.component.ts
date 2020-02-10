import { Component } from '@angular/core';
import { AbstractAComponent } from '../abstract-a.component';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent extends AbstractAComponent {}
