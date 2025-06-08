import { Component, Input } from '@angular/core';
import { CoreModule } from '../../../core/core.module';

@Component({
  selector: 'app-balance-card',
  imports: [CoreModule],
  templateUrl: './balance-card.component.html',
  styleUrl: './balance-card.component.scss',
  standalone: true,
})
export class BalanceCardComponent {
  @Input() balance!: number;
}
