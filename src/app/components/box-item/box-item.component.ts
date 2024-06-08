import { Component, Input } from '@angular/core';
import { ITEM } from '../../models/item';

@Component({
  selector: 'app-box-item',
  templateUrl: './box-item.component.html',
  styleUrl: './box-item.component.css'
})
export class BoxItemComponent {

  @Input()
  transaction? : ITEM;
}
