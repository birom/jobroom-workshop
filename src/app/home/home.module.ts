import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ToolbarItemComponent } from './toolbar-item/toolbar-item.component';
import { ToolbarTitleComponent } from './toolbar-title/toolbar-title.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, ToolbarComponent, ToolbarItemComponent, ToolbarTitleComponent]
})
export class HomeModule { }
