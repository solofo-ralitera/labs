import { AfterViewInit, ChangeDetectionStrategy, Component, EnvironmentInjector, OnInit, ViewChild, ViewContainerRef, createComponent } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  @ViewChild('container', {
    read: ViewContainerRef,
  }) container!: ViewContainerRef;

  public id: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private injector: EnvironmentInjector,
  ) {
    this.route.params.subscribe(p => {
      
    })
    /*
    this.route.paramMap.subscribe((p: ParamMap) => {
      this.id = p.get('id');
    });*/
  } 
}
