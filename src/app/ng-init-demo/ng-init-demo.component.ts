import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-ng-init-demo',
  templateUrl: './ng-init-demo.component.html',
  styleUrls: ['./ng-init-demo.component.css']
})
export class NgInitDemoComponent implements OnInit, OnDestroy {
  posts?: any[];
  posts$?: Observable<string[]>;
  private dataSubscription?: Subscription;

  constructor(private dataService: DataServiceService) {}
  ngOnInit(): void {
     this.dataSubscription = this.dataService.getPosts().subscribe(data => {
       this.posts = data;
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from the Observable to prevent memory leakage
     this.dataSubscription?.unsubscribe();
     console.log('destroy called');
  }

}
