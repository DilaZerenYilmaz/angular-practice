import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {

  @Input() items: any[] = [];
  @Input() columns: { key: string, title: string }[] = [];
  @Input() buttonLabel!: string;
  @Input() buttonRouterLink?: string;
  @Output() buttonClick = new EventEmitter<any>();


    editItem(itemId: any) {
      this.buttonClick.emit(itemId);
      }
}


