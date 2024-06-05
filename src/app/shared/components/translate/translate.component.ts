import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicLayoutComponent } from '../basic-layout/basic-layout.component';
import { TranslatePipe } from '../../pipes/Translate.pipe';

@Component({
  selector: 'app-translate',
  standalone: true,
  imports: [
    CommonModule,
    BasicLayoutComponent,
    TranslatePipe,
  ],
  templateUrl: './translate.component.html',
  styleUrl: './translate.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TranslateComponent { }
