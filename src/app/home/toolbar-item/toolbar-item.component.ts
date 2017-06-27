import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-toolbar-item',
  templateUrl: './toolbar-item.component.html',
  styleUrls: ['./toolbar-item.component.css']
})
export class ToolbarItemComponent implements OnInit {
  @Input() icon: string;
  @Input() active: boolean;
  @Output() select = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  handleClick() {
    this.select.emit();
  }

  isNavLink() {
    return !!this.icon;
  }
}
