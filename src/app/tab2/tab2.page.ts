import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
peso:any;
dollar: any;
result:any;
result1:any;

  constructor() {}

  convert(){
    this.dollar = 0.018019;
    this.result = this.peso * parseFloat(this.dollar);
    this.result1 =this.result.toFixed(2);
    console.log('Final Value' + this.result);
  }
}
