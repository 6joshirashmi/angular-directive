import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomdDirective } from './customd.directive';
import { SpinDirective } from './spin.directive';
import { InputcolorDirective } from './inputcolor.directive';
import { MouseDirective } from './mouse.directive';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MouseDirective,CustomdDirective,SpinDirective,InputcolorDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'angular-directive';

}
