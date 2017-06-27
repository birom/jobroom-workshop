import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, ToolbarComponent]
})
export class HomeModule { }
