import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { SnackBarComponent } from "../snackbar/snackbar.component";
import { Utils } from "../utils";

export enum OperationTypes {
  "ADD" = "ADD",
  "SUB" = "SUB",
  "MUL" = "MUL",
  "DIV" = "DIV",
  "RES" = "RES"
}

@Component({
  selector: "binary-calc",
  templateUrl: "binary-calc.component.html",
  styleUrls: ["binary-calc.component.scss"]
})
export class BinaryCalcComponent {
  OperationTypes = OperationTypes;
  public n1: string;
  public n2: string;
  public response: string;
  public operation: string = OperationTypes.ADD;

  constructor(private snackBar: MatSnackBar) {}

  public calc() {
    if (!this.validate()) {
      return false;
    }
    if (Utils.isBinary(this.n1) && Utils.isBinary(this.n2)) {
      switch (this.operation) {
        case OperationTypes.ADD:
          this.response = Utils.toBinary(
            Utils.toNumber(this.n1) + Utils.toNumber(this.n2),
            8
          );
          break;
        case OperationTypes.SUB:
          this.response = Utils.toBinary(
            Utils.toNumber(this.n1) - Utils.toNumber(this.n2),
            8
          );
          break;
        case OperationTypes.MUL:
          this.response = Utils.toBinary(
            Utils.toNumber(this.n1) * Utils.toNumber(this.n2),
            8
          );
          break;
        case OperationTypes.DIV:
          this.response = Utils.toBinary(
            Utils.toNumber(this.n1) / Utils.toNumber(this.n2),
            8
          );
          break;
        case OperationTypes.RES:
          this.response = Utils.toBinary(
            Utils.toNumber(this.n1) % Utils.toNumber(this.n2),
            8
          );
          break;
      }
    }
  }

  private validate(): boolean {
    if (this.n1 == null || this.n2 == null) {
      this.showSnackbar("Entre com o valor do número 1 e número 2");
      return false;
    }
    if (!Utils.isBinary(this.n1) || !Utils.isBinary(this.n2)) {
      this.showSnackbar("Os valores de entrada devem ser binários");
      return false;
    }
    return true;
  }

  private showSnackbar(msg: string) {
    this.snackBar.openFromComponent(SnackBarComponent, {
      data: { text: msg },
      duration: 5000
    });
  }
}
