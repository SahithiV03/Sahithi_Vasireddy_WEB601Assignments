import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { ContentListComponent } from './content-list/content-list.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
  { path: 'list', component: ContentListComponent },
  { path: 'list/:id', component: DetailComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
