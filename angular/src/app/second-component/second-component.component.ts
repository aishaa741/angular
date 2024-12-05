import { Component } from '@angular/core';
import { ThirdComponent } from '../third/third.component';

@Component({
  selector: 'app-second',
  imports: [ThirdComponent],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
 luca = 'secondo'
}