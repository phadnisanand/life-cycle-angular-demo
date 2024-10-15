import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  sendChild: number = 100;
  sendChild2: boolean = false;
  constructor() {
  }

  ngOnInit(): void {

  }
  increseCount() {
    this.sendChild =  this.sendChild+ 1;
    this.sendChild2 = !this.sendChild2;
  }


}
