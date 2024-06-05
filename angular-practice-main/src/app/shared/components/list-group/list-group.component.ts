import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

export interface ListGroupItem {
  id: string;
  label: string;
}
export type ListGroupItems = ListGroupItem[];

@Component({
  selector: 'app-list-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-group.component.html',
  styleUrl: './list-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListGroupComponent {
  @Input() items: ListGroupItems = [];

  @Output() changeSelect = new EventEmitter<string | null>();

  @Input() selectedItemId: string | null = null;

  onClickItem(event: ListGroupItem) {
    this.selectedItemId = this.selectedItemId !== event.id ? event.id : null;
    this.changeSelect.emit(this.selectedItemId);
  }

  isSelectedItem(itemId: string): boolean {
    return this.selectedItemId === itemId;
  }
}
