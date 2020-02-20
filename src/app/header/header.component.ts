import { Component, Output, EventEmitter } from "@angular/core";


@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent {
  @Output() selectedSection = new EventEmitter<string>();

  onSelect(section: string) {
    this.selectedSection.emit(section);
  }
}
