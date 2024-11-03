import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-signal-ejemplo-3',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './signal-ejemplo-3.component.html',
  styleUrl: './signal-ejemplo-3.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalEjemplo3Component {
contador = signal(0);
doublecount = computed( () => this.contador()+ 2 );
incrementar (){
this.contador.update( () => this.contador() + 1);
}


}
