import {NgModule} from "@angular/core";
import {BoardComponent} from "../shared/components/board/board.component";
import {FileComponent} from "../file/file.component";
import {PagesModuleRouting} from "./pages.module.routing";
import {NavLinkComponent} from "../shared/components/nav-link/nav-link.component";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    BoardComponent,
    FileComponent,
    NavLinkComponent],
  imports: [
    PagesModuleRouting,
    DragDropModule,
    CommonModule,
  ],
  exports: [
    BoardComponent,
    FileComponent,
    NavLinkComponent]
})

export class PagesModule {
  constructor() {
  }
}
