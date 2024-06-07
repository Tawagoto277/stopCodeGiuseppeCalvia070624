import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxListComponent } from './components/box-list/box-list.component';
import { BoxItemComponent } from './components/box-item/box-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxListComponent,
    BoxItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
