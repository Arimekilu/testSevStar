import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostComponent} from "./components/post/post.component";
import {FrontPageComponent} from "./components/front-page/front-page.component";

const routes: Routes = [
  {component: FrontPageComponent, path: ''},
  {component: PostComponent, path: 'post/:id'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
