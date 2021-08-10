import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SecurityItemsComponent} from './security-items.component';
import {CategoryComponent} from '../catalog/category/category.component';
import {SubcategoryComponent} from '../catalog/subcategory/subcategory.component';
import {ItemListComponent} from '../catalog/item-list/item-list.component';
import {AsignationItemComponent} from '../catalog/asignation-item/asignation-item.component';

const routes: Routes = [
  {
    path: 'security-items',
    component: SecurityItemsComponent,
    children: [
      {
        path: 'categories',
        component: CategoryComponent
      },
      {
        path: 'subcategories',
        component: SubcategoryComponent
      },
      {
        path: 'items',
        component: ItemListComponent
      },
      {
        path: 'itemsasignation',
        component: AsignationItemComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityItemsRoutingModule {
}
