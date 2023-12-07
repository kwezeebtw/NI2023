import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public.routes';
import { MenuComponent } from './menu/menu.component';




@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [],
  imports: [
    CommonModule, 
    PublicRoutingModule
  ]
})
export class PublicModule { }
