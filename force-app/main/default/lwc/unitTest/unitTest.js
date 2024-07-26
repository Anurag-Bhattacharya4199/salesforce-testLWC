import { LightningElement, api } from "lwc";
import { sum } from "./__tests__/sum";

export default class UnitTest extends LightningElement {
  @api unitNumber = sum(2, 3);
  handleChange(event) {
    this.unitNumber = event.target.value;
  }
}
