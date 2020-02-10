import { Component } from "@angular/core";
import { Utils } from "../utils";

@Component({
  selector: "binary-calc",
  templateUrl: "binary-calc.component.html",
  styleUrls: ["binary-calc.component.scss"]
})
export class BinaryCalcComponent {
  public n1: string;
  public n2: string;
  public response: string;

  public add() {
    console.log(Utils.toString(this.n1));
    console.log(Utils.toString(this.n2));
    this.response = Utils.toBinary(
      Utils.toString(this.n1) + Utils.toString(this.n2),
      8
    );
  }
}
