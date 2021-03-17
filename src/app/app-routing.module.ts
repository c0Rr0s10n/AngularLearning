import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDisplayComponent } from './item-display/item-display.component';
const routes: Routes = [
  { path: 'item/:id', component: ItemDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
