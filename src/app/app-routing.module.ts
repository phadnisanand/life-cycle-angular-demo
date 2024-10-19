import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { NgInitDemoComponent } from './ng-init-demo/ng-init-demo.component';

const routes: Routes = [
  { path: 'onchange', component: ParentComponent },
  { path: 'ondocheck', component: NgInitDemoComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
