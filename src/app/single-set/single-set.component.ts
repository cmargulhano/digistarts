import { Component } from "@angular/core";

@Component({
  selector: "single-set",
  templateUrl: "single-set.component.html",
  styleUrls: ["./single-set.component.scss"]
})
export class SingleSetComponent {
  public element: number;
  public response: string;
  private singleSet: Set<number> = new Set();

  constructor() {}

  public add() {
    if (!this.singleSet.has(this.element)) {
      this.singleSet.add(this.element);
    }
    this.response = [...this.singleSet]
      .sort((a, b) => {
        return a - b;
      })
      .join(", ");
    this.element = null;
  }
}
