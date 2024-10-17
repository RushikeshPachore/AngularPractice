import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css', './test.css'],
  inputs:['Pdata']  //from parent comp
  
})
export class Comp1Component {
Pdata:any; //any type of data
}
