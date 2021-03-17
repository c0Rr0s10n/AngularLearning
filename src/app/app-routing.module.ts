import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';

const routes: Routes = [
  { path: 'first-component', component: FirstComponent,children: [
    {
      path: 'child-a',
      component: ChildAComponent,
    },
    {
      path: 'child-b',
      component: ChildBComponent,
    }
  ]},
  {
    path: 'second-component',
    component: SecondComponent,

  },
  { path: '',   redirectTo: '/first-component', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
