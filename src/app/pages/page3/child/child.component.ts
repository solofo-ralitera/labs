import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  public id: string | null = null;

  constructor(
    private route: ActivatedRoute,
  ) {
    // this.id = this.route.snapshot.paramMap.get('id');

    this.route.paramMap.subscribe(param => {
      this.id = param.get('id');
    });
  }
}
