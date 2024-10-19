import { AfterContentChecked, AfterContentInit, ElementRef,AfterViewInit, AfterViewChecked, QueryList, Component, OnInit, SimpleChanges,ContentChild, ViewChild, ContentChildren, DoCheck} from '@angular/core';
import { ChildComponent } from '../child/child.component';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit, AfterViewChecked,DoCheck {
  sendChild: number = 100;
  oldsendChild?: number;
  sendChild2: boolean = false;
  @ViewChild('innerparent') innerparent!: ElementRef;
  
  constructor() {
  }

  ngOnInit(): void {

  }
  increseCount() {
    this.sendChild =  this.sendChild+ 1;
    this.sendChild2 = !this.sendChild2;
  }

  ngAfterViewInit() {
    this.innerparent.nativeElement.textContent = 'content after view init changed';
  }

  ngAfterViewChecked() {

  }
  ngDoCheck() {
    console.log('ngdocheck called');
    if (this.sendChild !== this.oldsendChild) {
      console.log(`DoCheck: Hero name changed to "${this.sendChild}" from "${this.oldsendChild}"`);
      this.oldsendChild = this.sendChild;
    }
  
  }
}
