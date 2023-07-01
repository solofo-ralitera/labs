import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component {
  public logTest2(): void {
    console.log('Ici');
  }
}
