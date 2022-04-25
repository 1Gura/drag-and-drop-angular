import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FileComponent} from "../file/file.component";
import {PagesComponent} from "./pages.component";
import {BoardComponent} from "../shared/components/board/board.component";

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: BoardComponent,
      },
      {
        path:'file',
        component: FileComponent
      },
    ]
  },
  {
    path:'**',
    redirectTo:''
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesModuleRouting {
}
