import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-onpush',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './onpush.component.html',
  styleUrls: ['./onpush.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnpushComponent {

}
