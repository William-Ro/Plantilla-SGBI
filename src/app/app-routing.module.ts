import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppLayoutComponent } from './layout/app.layout.component';

import { MaterialComponent } from './components/material/material.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [{ path: 'material', component: MaterialComponent }],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
