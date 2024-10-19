import { Component, Input, OnChanges, OnInit,SimpleChanges,ContentChild, AfterContentInit ,ElementRef} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, AfterContentInit {
  @Input() sendChild?:number;
  @Input() sendChild2?:boolean;
  @ContentChild('header')
  cardHeaderData: ElementRef = {
    nativeElement: undefined
  };

  message:string = "";
  constructor() { }
  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called');
    const veganValue = changes['sendChild2'];
    if (veganValue.currentValue === true) {
      this.message = 'Here is your vegan food';
    } else {
      this.message = 'Here is non-vegan food';
    }
  }
  ngOnInit(): void {

  }
  ngAfterContentInit(): void {
    this.cardHeaderData.nativeElement.textContent = 'content projection changed.';
    console.log('Child component element content has been initialized.');
  }

}
