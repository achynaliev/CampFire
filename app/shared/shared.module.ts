import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavbarComponent } from '../navbar/navbar.component';
import { SearchComponent, SearchItem } from '../search';

@NgModule({
  imports: [CommonModule],
  declarations: [
    NavbarComponent,
    SearchComponent,
    SearchItem,
  ],
  exports: [
    NavbarComponent,
    SearchComponent,
    SearchItem,
  ]
})

export class SharedModule {}
