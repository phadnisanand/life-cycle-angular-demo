import { Component, Input, OnChanges, OnInit,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges {
  @Input() sendChild?:number;
  @Input() sendChild2?:boolean;
  message:string = "";
  constructor() { }
  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
    const veganValue = changes['sendChild2'];
    if (veganValue.currentValue === true) {
      this.message = 'Here is your vegan food';
    } else {
      this.message = 'Here is non-vegan food';
    }
  }
  ngOnInit(): void {
  }

}
