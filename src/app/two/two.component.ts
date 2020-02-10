import { Component, OnInit } from '@angular/core';
import { AbstractBComponent } from '../abstract-b.component';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent extends AbstractBComponent {}
