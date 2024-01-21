import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
 
  @Output() linkClicked = new EventEmitter<string>();

  onLinkClick(link: string): void {
    console.log(link); 
    this.linkClicked.emit(link);
  }
}
